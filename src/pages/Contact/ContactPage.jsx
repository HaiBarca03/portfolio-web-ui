import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Typography, Card, Space, message, Result } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MailOutlined,
  PhoneOutlined,
  LinkOutlined,
  SendOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const onFinish = (values) => {
    setLoading(true);

    const serviceId = import.meta.env.VITE_SERVICE_ID
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_MAIL_KEY;

    const templateParams = {
      name: values.name,
      email: values.email,
      title: values.subject,
      message: values.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setStatus('success');
        form.resetFields();
      })
      .catch(() => {
        setStatus('error');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReset = () => {
    setStatus(null);
  };

  return (
    <div className="contact-container">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title level={1}>Liên hệ</Title>
        <Paragraph>
          Bạn có dự án muốn hợp tác hoặc chỉ đơn giản là muốn kết nối? Hãy liên hệ với tôi!
        </Paragraph>
      </motion.div>

      <Row gutter={[48, 48]} className="contact-content">
        <Col xs={24} lg={10}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Title level={3}>Thông tin liên hệ</Title>
            <Space direction="vertical" size="large" className="contact-info-list">
              <div className="contact-info-item">
                <div className="info-icon"><MailOutlined /></div>
                <div className="info-text">
                  <Text strong>Email</Text>
                  <Text type="secondary">contact@haidd.dev</Text>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon"><PhoneOutlined /></div>
                <div className="info-text">
                  <Text strong>Số điện thoại</Text>
                  <Text type="secondary">+84 123 456 789</Text>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon"><LinkOutlined /></div>
                <div className="info-text">
                  <Text strong>Mạng xã hội</Text>
                  <Space>
                    <a href="#" className="social-link">LinkedIn</a>
                    <a href="#" className="social-link">GitHub</a>
                  </Space>
                </div>
              </div>
            </Space>

            <Card className="contact-availability-card">
              <Text strong>Trạng thái hiện tại</Text>
              <Paragraph type="secondary">
                Tôi hiện đang sẵn sàng nhận dự án freelance.
                Thường phản hồi trong vòng 24 giờ.
              </Paragraph>
            </Card>
          </motion.div>
        </Col>

        <Col xs={24} lg={14}>
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <AnimatePresence mode="wait">
              {!status ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    size="large"
                    className="contact-form"
                  >
                    <Row gutter={16}>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="name"
                          label="Họ và tên"
                          rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                        >
                          <Input placeholder="Nhập họ và tên" />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          name="email"
                          label="Email"
                          rules={[
                            { required: true, message: 'Vui lòng nhập email' },
                            { type: 'email', message: 'Email không hợp lệ' }
                          ]}
                        >
                          <Input placeholder="Nhập email của bạn" />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      name="subject"
                      label="Chủ đề"
                      rules={[{ required: true, message: 'Vui lòng nhập chủ đề' }]}
                    >
                      <Input placeholder="Bạn muốn trao đổi về điều gì?" />
                    </Form.Item>

                    <Form.Item
                      name="message"
                      label="Nội dung"
                      rules={[{ required: true, message: 'Vui lòng nhập nội dung' }]}
                    >
                      <TextArea rows={5} placeholder="Nhập nội dung tin nhắn..." />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                      <Button
                        type="primary"
                        htmlType="submit"
                        icon={<SendOutlined />}
                        className="submit-btn"
                        block
                        loading={loading}
                      >
                        Gửi tin nhắn
                      </Button>
                    </Form.Item>
                  </Form>
                </motion.div>
              ) : (
                <motion.div
                  key="status"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="status-overlay"
                >
                  <Result
                    status={status}
                    title={status === 'success' ? "Gửi thành công!" : "Gửi thất bại!"}
                    subTitle={status === 'success' ? "Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn sớm nhất có thể." : "Đã có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại sau ít phút."}
                    extra={[
                      <Button
                        type={status === 'success' ? 'primary' : 'default'}
                        key="reset"
                        onClick={handleReset}
                        size="large"
                        className="status-btn"
                      >
                        {status === 'success' ? 'Gửi tin nhắn khác' : 'Thử lại ngay'}
                      </Button>
                    ]}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;