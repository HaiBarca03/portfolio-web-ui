import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Avatar, Row, Col, Card, Space, Tag, Divider, Button, FloatButton, Input, Skeleton, Empty, message } from 'antd';
import { motion } from 'framer-motion';
import {
  CalendarOutlined,
  UserOutlined,
  TagOutlined,
  ArrowUpOutlined,
  ReadOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  PlusOutlined,
  LoadingOutlined
} from '@ant-design/icons';
import { Modal, Form, Select, Upload } from 'antd';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { fetchArticles, createArticle } from '../../stores/articleSlice';
import { fetchCategories } from '../../stores/categorySlice';
import Axioscustom from '../../stores/Axioscustom';
import './BlogPage.css';

const { Title, Paragraph, Text } = Typography;

const formatDate = (dateString) => {
  if (!dateString) return "Đang cập nhật";
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const stripHtml = (html) => {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

const BlogPage = () => {
  const dispatch = useDispatch();
  const { items: articles, loading: articlesLoading, error: articlesError } = useSelector((state) => state.articles);
  const { items: categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories);

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [form] = Form.useForm();
  const [creating, setCreating] = React.useState(false);
  const [content, setContent] = React.useState('');
  const [coverImageUrl, setCoverImageUrl] = React.useState('');
  const [uploadingCover, setUploadingCover] = React.useState(false);

  // States for viewing full article
  const [viewingArticle, setViewingArticle] = React.useState(null);
  const [isViewModalVisible, setIsViewModalVisible] = React.useState(false);

  useEffect(() => {
    dispatch(fetchArticles({ status: 'PUBLISHED' }));
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setContent('');
    setCoverImageUrl('');
  };

  const handleImageUploadBefore = (files, info, uploadHandler) => {
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);

    Axioscustom.post('/upload/image', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(res => {
        const response = {
          result: [{
            url: res.data.url,
            name: file.name,
            size: file.size
          }]
        };
        uploadHandler(response);
      })
      .catch(err => {
        message.error('Không thể upload ảnh: ' + (err.message || 'Lỗi server'));
        uploadHandler(err.message);
      });
    return false;
  };

  const handleCoverUpload = async (info) => {
    if (info.file.status === 'uploading') {
      setUploadingCover(true);
      return;
    }
    if (info.file.status === 'done' || info.file.originFileObj) {
      const file = info.file.originFileObj || info.file;
      const formData = new FormData();
      formData.append('file', file);

      try {
        setUploadingCover(true);
        const res = await Axioscustom.post('/upload/image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        setCoverImageUrl(res.data.url);
        message.success('Upload ảnh bìa thành công');
      } catch (err) {
        message.error('Lỗi upload ảnh bìa');
      } finally {
        setUploadingCover(false);
      }
    }
  };

  const onFinish = async (values) => {
    if (!content || content === '<p><br></p>') {
      message.warning('Vui lòng nhập nội dung bài viết');
      return;
    }

    setCreating(true);
    const articleData = {
      ...values,
      content,
      coverImage: coverImageUrl
    };

    try {
      await dispatch(createArticle(articleData)).unwrap();
      message.success('Tạo bài viết thành công!');
      handleCancel();
    } catch (err) {
      message.error(err || 'Không thể tạo bài viết');
    } finally {
      setCreating(false);
    }
  };

  const handleViewArticle = (article) => {
    setViewingArticle(article);
    setIsViewModalVisible(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalVisible(false);
    setViewingArticle(null);
  };

  useEffect(() => {
    if (articlesError) {
      message.error(articlesError);
    }
    if (categoriesError) {
      message.error(categoriesError);
    }
  }, [articlesError, categoriesError]);

  return (
    <div className="blog-refined-container">
      {/* Blog Page Header */}
      <motion.div
        className="blog-main-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title level={1}>Nhật Ký Lập Trình</Title>
        <Paragraph>Nơi chia sẻ kiến thức, trải nghiệm và những thứ hay ho trong thế giới công nghệ.</Paragraph>
      </motion.div>

      <Row gutter={[32, 32]} className="blog-layout">
        {/* Left column: Feed */}
        <Col xs={24} lg={16}>
          <div className="blog-feed">
            {articlesLoading ? (
              // Skeleton loading state
              Array(3).fill(0).map((_, index) => (
                <Card key={index} className="blog-post-card-v2" bordered={false} style={{ marginBottom: 24 }}>
                  <Skeleton avatar active paragraph={{ rows: 4 }} />
                </Card>
              ))
            ) : articles.length === 0 ? (
              <Empty description="Chưa có bài viết nào được đăng." />
            ) : (
              articles.map((post, index) => (
                <motion.article
                  key={post._id || post.id}
                  className="blog-feed-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="blog-post-card-v2" bordered={false}>
                    <div className="card-post-header">
                      <Avatar src="data:image/jpeg;base64,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" size={48} />
                      <div className="author-info">
                        <Text strong className="author-name">{post.authorId.name || 'Anonymous'}</Text>
                        <div className="post-meta-line">
                          <Text type="secondary"><CalendarOutlined /> {formatDate(post.publishedAt || post.createdAt || post.date)}</Text>
                        </div>
                      </div>
                    </div>

                    <div className="card-post-content">
                      <Title level={3} className="post-title">{post.title}</Title>
                      <Paragraph className="post-excerpt">
                        {post.excerpt || stripHtml(post.content).substring(0, 160) + '...'}
                      </Paragraph>
                      {(post.coverImage || post.image) && (
                        <div className="post-img-wrapper">
                          <img src={post.coverImage || post.image} alt={post.title} />
                        </div>
                      )}
                    </div>

                    <div className="card-post-footer">
                      <Space size="middle" wrap>
                        {(post.tags || []).map(tag => (
                          <Tag key={tag} color="blue">{tag}</Tag>
                        ))}
                      </Space>
                      <Button
                        type="link"
                        icon={<ReadOutlined />}
                        className="read-more-btn"
                        onClick={() => handleViewArticle(post)}
                      >
                        Đọc bài viết
                      </Button>
                    </div>
                  </Card>
                </motion.article>
              ))
            )}
          </div>
        </Col>

        {/* Right column: Sidebar */}
        <Col xs={24} lg={8}>
          <div className="blog-sidebar">
            <Card
              title="Về Tác Giả"
              className="sidebar-card about-author-sidebar"
              bordered={false}
              extra={<Button type="text" icon={<PlusOutlined />} onClick={handleOpenModal} />}
            >
              <div className="sidebar-author-box">
                <Avatar src="https://res.cloudinary.com/dbzuqtojr/image/upload/v1772511305/avatar-user/avttexxt_dnwmtq.png" size={80} />
                <Title level={4}>Đoàn Đức Hải</Title>
                <Paragraph>Backend Developer đam mê xây dựng những hệ thống chất lượng và chia sẻ kiến thức tới cộng đồng.</Paragraph>
                <Space size="middle" className="sidebar-socials">
                  <GithubOutlined className="social-icon" />
                  <FacebookOutlined className="social-icon" />
                  <LinkedinOutlined className="social-icon" />
                </Space>
              </div>
            </Card>

            <Card title="Danh Mục" className="sidebar-card" bordered={false}>
              <div className="sidebar-categories">
                {categoriesLoading ? (
                  <Skeleton active paragraph={{ rows: 2 }} />
                ) : categories.length === 0 ? (
                  <Text type="secondary">Chưa có danh mục nào.</Text>
                ) : (
                  categories.map(cat => (
                    <Tag key={cat._id || cat.id || cat.title || cat} className="sidebar-tag">
                      {cat.title || cat}
                    </Tag>
                  ))
                )}
              </div>
            </Card>
          </div>
        </Col>
      </Row>

      <FloatButton.BackTop icon={<ArrowUpOutlined />} type="primary" />

      {/* Create Article Modal */}
      <Modal
        title="Viết Bài Mới"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        destroyOnClose
        centered
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            status: 'PUBLISHED',
            authorName: 'Tên tác giả'
          }}
        >
          <Form.Item
            name="title"
            label="Tiêu đề"
            rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}
          >
            <Input placeholder="Nhập tiêu đề bài viết..." size="large" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="authorName"
                label="Người viết"
                rules={[{ required: true, message: 'Vui lòng nhập tên người viết' }]}
              >
                <Input placeholder="Tên tác giả..." />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Trạng thái"
              >
                <Select options={[
                  { label: 'Công khai (Published)', value: 'PUBLISHED' },
                  { label: 'Nháp (Draft)', value: 'DRAFT' }
                ]} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="categoryIds"
                label="Danh mục"
              >
                <Select
                  mode="multiple"
                  placeholder="Chọn danh mục"
                  loading={categoriesLoading}
                  options={categories.map(cat => ({
                    label: cat.title || cat,
                    value: cat._id || cat.id || cat
                  }))}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="tags"
                label="Tags"
              >
                <Select
                  mode="tags"
                  placeholder="Nhập tag (Enter sau mỗi tag)"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Ảnh bìa">
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              customRequest={({ file, onSuccess }) => setTimeout(() => onSuccess("ok"), 0)}
              onChange={handleCoverUpload}
            >
              {coverImageUrl ? (
                <img src={coverImageUrl} alt="cover" style={{ width: '100%', borderRadius: 8 }} />
              ) : (
                <div>
                  {uploadingCover ? <LoadingOutlined /> : <PlusOutlined />}
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item label="Nội dung">
            <SunEditor
              setContents={content}
              onChange={setContent}
              setOptions={{
                height: 400,
                buttonList: [
                  ['undo', 'redo'],
                  ['font', 'fontSize', 'formatBlock'],
                  ['paragraphStyle', 'blockquote'],
                  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                  ['fontColor', 'hiliteColor', 'textStyle'],
                  ['removeFormat'],
                  ['outdent', 'indent'],
                  ['align', 'horizontalRule', 'list', 'lineHeight'],
                  ['table', 'link', 'image', 'video'],
                  ['fullScreen', 'showBlocks', 'codeView'],
                  ['preview', 'print'],
                ]
              }}
              onImageUploadBefore={handleImageUploadBefore}
            />
          </Form.Item>

          <Form.Item className="modal-footer-btns">
            <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Button onClick={handleCancel}>Hủy</Button>
              <Button type="primary" htmlType="submit" loading={creating}>
                Đăng bài viết
              </Button>
            </Space>
          </Form.Item>

          <p style={{ color: 'red', textAlign: 'center' }}>Hệ thống cho phép đăng bài, không chờ duyệt, không thể xoá</p>
        </Form>
      </Modal>

      {/* View Article Modal */}
      <Modal
        title={null}
        open={isViewModalVisible}
        onCancel={handleCloseViewModal}
        footer={null}
        width={900}
        destroyOnClose
        centered
        styles={{
          content: {
            margin: '20px 0',
          },
        }}
        className="article-view-modal"
      >
        {viewingArticle && (
          <div className="view-article-container">
            {(viewingArticle.coverImage || viewingArticle.image) && (
              <div className="view-article-cover">
                <img className='image-view-article-cover' src={viewingArticle.coverImage || viewingArticle.image} alt={viewingArticle.title} />
              </div>
            )}
            <div className="view-article-header">
              <Title level={3}>{viewingArticle.title}</Title>
              <div className="view-article-meta">
                <Avatar src="data:image/jpeg;base64,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" size={40} />
                <div className="author-meta">
                  <Text strong>{viewingArticle.authorId.name || 'Anonymous'}</Text>
                  <br />
                  <Text type="secondary" block>
                    <CalendarOutlined /> {formatDate(viewingArticle.publishedAt || viewingArticle.createdAt)}
                  </Text>
                </div>
              </div>
              <Divider />
            </div>
            <div
              className="view-article-content"
              dangerouslySetInnerHTML={{ __html: viewingArticle.content }}
            />
            <div className="view-article-footer">
              <Divider />
              <Space wrap>
                {(viewingArticle.tags || []).map(tag => (
                  <Tag key={tag} color="blue">{tag}</Tag>
                ))}
              </Space>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BlogPage;
