import React from 'react';
import { Typography, Avatar, Row, Col, Card, Space, Tag, Divider, Button, FloatButton, Input } from 'antd';
import { motion } from 'framer-motion';
import {
  CalendarOutlined,
  UserOutlined,
  TagOutlined,
  ArrowUpOutlined,
  ReadOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined
} from '@ant-design/icons';
import './BlogPage.css';

const { Title, Paragraph, Text } = Typography;

const blogPosts = [
  {
    id: 1,
    title: "Làm chủ React 19: Các tính năng mới và Hooks quan trọng",
    date: "15 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["React", "Frontend", "JavaScript"],
    excerpt: "React 19 đã chính thức ra mắt và mang đến những thay đổi mang tính cách mạng... Đặc biệt là React Compiler giúp tối ưu render tự động.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
  },
  {
    id: 2,
    title: "Xây dựng Microservices với NestJS và Kafka",
    date: "10 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["NestJS", "Backend", "Kafka"],
    excerpt: "Khi hệ thống phát triển đến một quy mô nhất định, kiến trúc Monolith thường bộc lộ những hạn chế. Microservices là giải pháp tuyệt vời...",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1200&q=80"
  },
  {
    id: 3,
    title: "Tầm quan trọng của Clean Code trong phát triển hiện đại",
    date: "05 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["Best Practices", "Software Engineering"],
    excerpt: "'Bất kỳ ai cũng có thể viết code mà máy tính hiểu được. Những lập trình viên giỏi viết code mà con người có thể hiểu được.'",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80"
  }
];

const categories = ["Frontend", "Backend", "Microservices", "Clean Code", "Tips & Tricks"];

const BlogPage = () => {
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
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="blog-feed-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="blog-post-card-v2" bordered={false}>
                  <div className="card-post-header">
                    <Avatar src="https://res.cloudinary.com/dbzuqtojr/image/upload/v1772511305/avatar-user/avttexxt_dnwmtq.png" size={48} />
                    <div className="author-info">
                      <Text strong className="author-name">{post.author}</Text>
                      <div className="post-meta-line">
                        <Text type="secondary"><CalendarOutlined /> {post.date}</Text>
                      </div>
                    </div>
                  </div>

                  <div className="card-post-content">
                    <Title level={3} className="post-title">{post.title}</Title>
                    <Paragraph className="post-excerpt">{post.excerpt}</Paragraph>
                    {post.image && (
                      <div className="post-img-wrapper">
                        <img src={post.image} alt={post.title} />
                      </div>
                    )}
                  </div>

                  <div className="card-post-footer">
                    <Space size="middle">
                      {post.tags.map(tag => (
                        <Tag key={tag} color="blue">{tag}</Tag>
                      ))}
                    </Space>
                    <Button type="link" icon={<ReadOutlined />} className="read-more-btn">Đọc bài viết</Button>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </Col>

        {/* Right column: Sidebar */}
        <Col xs={24} lg={8}>
          <div className="blog-sidebar">
            <Card title="Về Tác Giả" className="sidebar-card about-author-sidebar" bordered={false}>
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
                {categories.map(cat => (
                  <Tag key={cat} className="sidebar-tag">{cat}</Tag>
                ))}
              </div>
            </Card>

            {/* <Card title="Đăng ký nhận tin" className="sidebar-card newsletter-card" bordered={false}>
              <Paragraph>Luôn cập nhật những bài viết mới nhất và tài liệu kỹ thuật chất lượng.</Paragraph>
              <Input.Search placeholder="Email của bạn" enterButton="Gửi" size="large" />
            </Card> */}
          </div>
        </Col>
      </Row>

      <FloatButton.BackTop icon={<ArrowUpOutlined />} type="primary" />
    </div>
  );
};

export default BlogPage;
