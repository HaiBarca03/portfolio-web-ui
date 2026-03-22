import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import {
  SolutionOutlined,
  DesktopOutlined,
  GlobalOutlined,
  RocketOutlined,
  CheckCircleFilled,
  CustomerServiceOutlined
} from '@ant-design/icons';
import './SupportPage.css';

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Hỗ trợ bài tập",
    desc: "Hướng dẫn và hỗ trợ toàn diện cho bài tập từ ý tưởng đến triển khai hoàn chỉnh. Bao gồm tài liệu, code và chuẩn bị bảo vệ.",
    icon: <SolutionOutlined />,
    features: ["Tài liệu đầy đủ", "Code hoàn chỉnh", "Hướng dẫn deploy", "Chuẩn bị bảo vệ"]
  },
  {
    title: "Phát triển website / Outsourcing",
    desc: "Hiện thực hóa ý tưởng kinh doanh của bạn bằng các ứng dụng web hiệu năng cao sử dụng công nghệ hiện đại như React, Node.js, Java.",
    icon: <GlobalOutlined />,
    features: ["Responsive đa thiết bị", "Tối ưu SEO", "Backend mở rộng tốt", "Tích hợp API"]
  },
  {
    title: "Thiết kế UI/UX",
    desc: "Thiết kế giao diện trực quan, hiện đại và mang lại trải nghiệm người dùng tối ưu, chuyên nghiệp.",
    icon: <DesktopOutlined />,
    features: ["Wireframe", "Prototype", "Design System", "Mobile-first"]
  },
  {
    title: "Nâng cấp hệ thống",
    desc: "Hiện đại hóa hệ thống cũ nhằm cải thiện hiệu năng, bảo mật và khả năng bảo trì với công nghệ mới.",
    icon: <RocketOutlined />,
    features: ["Chuyển đổi Cloud", "Tối ưu database", "Microservices", "Đánh giá bảo mật"]
  }
];

const SupportPage = () => {
  return (
    <div className="support-container">
      <motion.div
        className="support-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title level={1}>Dịch vụ & Outsourcing</Title>
        <Paragraph>
          Cung cấp các giải pháp kỹ thuật chất lượng cao, từ hỗ trợ học tập đến phát triển hệ thống doanh nghiệp.
        </Paragraph>
      </motion.div>

      <Row gutter={[32, 32]} className="services-grid">
        {services.map((service, index) => (
          <Col xs={24} md={12} key={index}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="service-card" hoverable>
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <Title level={3} className="service-title">{service.title}</Title>
                <Paragraph className="service-desc">{service.desc}</Paragraph>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircleFilled className="check-icon" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  type="primary"
                  size="large"
                  block
                  className="service-btn"
                  icon={<CustomerServiceOutlined />}
                >
                  Liên hệ ngay
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.div
        className="support-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Title level={2}>Bạn có yêu cầu riêng?</Title>
        <Paragraph>
          Tôi có thể linh hoạt theo công nghệ và yêu cầu cụ thể của dự án.
        </Paragraph>
        <Button size="large" className="contact-btn">
          Nhận báo giá
        </Button>
      </motion.div>
    </div>
  );
};

export default SupportPage;