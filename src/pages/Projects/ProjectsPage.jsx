import React from 'react';
import { Typography, Row, Col, Card, Tag, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import {
  GithubOutlined,
  GlobalOutlined,
  RocketOutlined,
  CodeOutlined,
  CheckCircleFilled
} from '@ant-design/icons';
import './ProjectsPage.css';

const { Title, Paragraph, Text } = Typography;

const projects = [
  {
    id: 1,
    title: "Web Giới Thiệu Doanh Nghiệp",
    type: "Corporate Website",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    tech: ["NestJS", "ReactJS", "PostgreSQL", "Tailwind CSS"],
    description: "Giải pháp website giới thiệu doanh nghiệp chuyên nghiệp, tối ưu SEO và đa ngôn ngữ cho VietGlobal JSC",
    features: ["Đa ngôn ngữ (i18n)", "Tối ưu hóa SEO & Performance", "Hệ thống quản trị nội dung (CMS)", "Giao diện Responsive"],
    link: "#"
  },
  {
    id: 2,
    title: "Hệ Thống Quản Trị Nhân Sự (HRMS)",
    type: "Enterprise System",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?w=1200&q=80",
    tech: ["NestJS", "ReactJS", "PostgreSQL", "Redis", "Ant Design"],
    description: "Hệ thống quản lý nhân sự toàn diện, giúp doanh nghiệp tối ưu hóa quy trình vận hành và quản lý nguồn nhân lực.",
    features: ["Quản lý hồ sơ nhân viên", "Chấm công & Tính lương tự động", "Quản lý nghỉ phép & Khen thưởng", "Báo cáo & Phân tích (Dashboard)"],
    link: "#"
  },
  {
    id: 3,
    title: "Website Bán Tranh Online",
    type: "E-commerce Platform",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1200&q=80",
    tech: ["NestJS", "ReactJS", "MongoDB", "Cloudinary", "Stripe"],
    description: "Nền tảng thương mại điện tử dành riêng cho nghệ thuật, mang lại trải nghiệm mua sắm đẳng cấp và an toàn.",
    features: ["Quản lý bộ sưu tập tranh", "Giỏ hàng & Thanh toán trực tuyến", "Theo dõi đơn hàng real-time", "Trang quản trị dành cho nghệ sĩ"],
    link: "#"
  }
];

const ProjectsPage = () => {
  return (
    <div className="projects-container">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title level={1}>Sản Phẩm Đã Triển Khai</Title>
        <Title level={3}>Với sự tin tưởng của khách hàng</Title>
        <Paragraph>Bộ sưu tập các dự án tiêu biểu được xây dựng trên nền tảng NestJS và ReactJS, tập trung vào chất lượng code và trải nghiệm người dùng.</Paragraph>
      </motion.div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-row-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Row gutter={[48, 48]} align="middle" className={index % 2 !== 0 ? 'flex-reverse' : ''}>
              <Col xs={24} lg={12}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-display-img" />
                  <div className="project-type-tag">{project.type}</div>
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <div className="project-detail-content">
                  <Title level={2}>{project.title}</Title>
                  <div className="project-tech-tags">
                    {project.tech.map(t => <Tag key={t} color="blue">{t}</Tag>)}
                  </div>
                  <Paragraph className="project-long-desc">
                    {project.description}
                  </Paragraph>
                  <ul className="project-features-list">
                    {project.features.map((f, i) => (
                      <li key={i}><CheckCircleFilled className="check-icon" /> {f}</li>
                    ))}
                  </ul>
                  <Space size="middle" className="project-actions">
                    <Button type="primary" size="large" icon={<GlobalOutlined />} className="view-live-btn">
                      Xem thực tế
                    </Button>
                    <Button size="large" icon={<GithubOutlined />} className="view-repo-btn">
                      Source Code
                    </Button>
                  </Space>
                </div>
              </Col>
            </Row>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="projects-footer-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Title level={2}>Bạn có dự án cần triển khai?</Title>
        <Paragraph>Mình luôn sẵn sàng thảo luận về những ý tưởng mới và đưa chúng vào thực tế.</Paragraph>
        <Button type="primary" size="large" icon={<RocketOutlined />} className="cta-btn-final">Bắt đầu ngay hôm nay</Button>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
