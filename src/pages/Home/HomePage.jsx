import React from 'react';
import { Button, Typography, Row, Col, Card, Space, Divider, Timeline } from 'antd';
import { motion } from 'framer-motion';
import {
  RocketOutlined,
  MessageOutlined,
  ProjectOutlined,
  CodeOutlined,
  DatabaseOutlined,
  CloudServerOutlined,
  BlockOutlined,
  SendOutlined,
  SolutionOutlined,
  BulbOutlined,
  LaptopOutlined,
  InteractionOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import CountUp from 'react-countup';
import './HomePage.css';

const { Title, Paragraph, Text } = Typography;

const techStack = [
  {
    category: "Languages",
    icon: <CodeOutlined />,
    description: "Ngôn ngữ lập trình mạnh mẽ là nền tảng cho sự ổn định và hiệu năng.",
    skills: ["TypeScript", "JavaScript", "C#", "Java"]
  },
  {
    category: "Frontend",
    icon: <BlockOutlined />,
    description: "Kiến tạo trải nghiệm người dùng mượt mà, tối ưu và thẩm mỹ.",
    skills: ["ReactJS", "Next.js", "Ant Design", "Redux"]
  },
  {
    category: "Backend",
    icon: <CloudServerOutlined />,
    description: "Xây dựng hệ thống phía máy chủ mạnh mẽ, bảo mật và dễ mở rộng.",
    skills: ["Node.js", "NestJS", "Spring Boot", "ASP.NET Core", "Microservices"]
  },
  {
    category: "Infrastructure & Data",
    icon: <DatabaseOutlined />,
    description: "Quản lý dữ liệu và vận hành hệ thống với tính sẵn sàng cao.",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Docker", "RabbitMQ", "Kafka"]
  }
];

const workflowSteps = [
  { title: "Khám phá & Lên ý tưởng", icon: <BulbOutlined />, desc: "Tìm hiểu yêu cầu, phân tích bài toán và lựa chọn công nghệ phù hợp." },
  { title: "Thiết kế & Phác thảo", icon: <SolutionOutlined />, desc: "Xây dựng cấu trúc hệ thống, cơ sở dữ liệu và thiết kế UI/UX." },
  { title: "Phát triển & Tối ưu", icon: <CodeOutlined />, desc: "Viết code sạch, tối ưu hiệu năng và đảm bảo tính bảo mật." },
  { title: "Triển khai & Bảo trì", icon: <RocketOutlined />, desc: "Đưa sản phẩm lên môi trường production và hỗ trợ vận hành." }
];

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-visual-deco"></div>
        <div className="deco-line"></div>

        <motion.div
          className="availability-tag"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="dot pulse"></span>
          Sẵn sàng cho dự án mới
        </motion.div>

        <Title className="hero-name">
          Hello,<br />I'm <span>Hai</span> 🚀
        </Title>

        <Text className="hero-role">Backend Developer</Text>
        <Text className="hero-role">Future Software Engineer</Text>

        <Paragraph className="hero-desc">
          Mình tạo ra những trải nghiệm số tinh tế — từ giao diện
          đến các hệ thống backend có khả năng mở rộng và hoạt động ổn định.
        </Paragraph>

        <Space className="cta-group" size="large">
          <Button
            type="primary"
            size="large"
            icon={<ProjectOutlined />}
            className="btn-primary-gradient"
            onClick={() => window.location.href = '/projects'}
          >
            Xem Dự Án
          </Button>
          <Button
            size="large"
            icon={<MessageOutlined />}
            className="btn-outline-glass"
            onClick={() => window.location.href = '/contact'}
          >
            Liên Hệ
          </Button>
        </Space>

        <div className="stats-row-wrapper">
          <Row className="stats-row" gutter={[40, 40]} justify="center">
            <Col>
              <div className="stat-item">
                <div className="stat-num">~<CountUp end={1} /></div>
                <div className="stat-label">Năm kinh nghiệm</div>
              </div>
            </Col>
            <div className="stat-divider"></div>
            <Col>
              <div className="stat-item">
                <div className="stat-num"><CountUp end={20} suffix="+" /></div>
                <div className="stat-label">Dự án hoàn thành</div>
              </div>
            </Col>
            <div className="stat-divider"></div>
            <Col>
              <div className="stat-item">
                <div className="stat-num">∞</div>
                <div className="stat-label">Tinh thần học hỏi</div>
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>

      {/* About & Philosophy Section */}
      <section className="about-section">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={10}>
            <motion.div
              className="about-image-card"
              whileHover={{ rotate: -2, scale: 1.02 }}
            >
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" alt="Work Desk" />
              <div className="about-overlay-text">Coding with Heart</div>
            </motion.div>
          </Col>
          <Col xs={24} lg={14}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Title level={2}>Về mình & Triết lý công việc</Title>
              <Paragraph>
                Với mình, lập trình không chỉ là gõ code, mà là giải quyết vấn đề. Mình tin rằng một sản phẩm tốt phải cân bằng được giữa trải nghiệm người dùng tối ưu và kiến trúc hệ thống vững chắc.
              </Paragraph>
              <Paragraph>
                Mỗi dòng code mình viết ra đều hướng tới sự minh bạch (Clean Code), hiệu quả và tính mở rộng cao. Mình không ngừng tìm tòi những công nghệ mới nhất để áp dụng vào thực tế, nhằm mang lại giá trị cao nhất cho khách hàng.
              </Paragraph>
              <Row gutter={[16, 16]} className="value-pills">
                <Col span={12}><Text strong><CheckCircleOutlined /> Chất lượng</Text></Col>
                <Col span={12}><Text strong><CheckCircleOutlined /> Đúng tiến độ</Text></Col>
                <Col span={12}><Text strong><CheckCircleOutlined /> Giải pháp tối ưu</Text></Col>
                <Col span={12}><Text strong><CheckCircleOutlined /> Hỗ trợ tận tâm</Text></Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-section">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Title level={2}>Hệ sinh thái công nghệ</Title>
          <Paragraph>Mình tập trung vào những "Modern Stack" mạnh mẽ nhất hiện nay để xây dựng mọi thứ từ MVP đến hệ thống Enterprise.</Paragraph>
        </motion.div>

        <Row gutter={[24, 24]} className="tech-cards-grid">
          {techStack.map((item, index) => (
            <Col xs={24} sm={12} key={item.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="tech-card-premium" hoverable>
                  <div className="tech-card-header">
                    <div className="tech-icon-glow">{item.icon}</div>
                    <Title level={4}>{item.category}</Title>
                  </div>
                  <Paragraph className="tech-card-desc">{item.description}</Paragraph>
                  <div className="tech-tags-group">
                    {item.skills.map(skill => (
                      <span key={skill} className="tech-pill-v2">{skill}</span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Workflow Strategy */}
      <section className="workflow-section">
        <div className="section-header">
          <Title level={2}>Quy trình triển khai</Title>
          <Paragraph>Đảm bảo mọi dự án đều được vận hành một cách trơn chu và đạt kết quả tốt nhất.</Paragraph>
        </div>

        <Row gutter={[32, 32]} className="workflow-grid">
          {workflowSteps.map((step, idx) => (
            <Col xs={24} sm={12} lg={6} key={idx}>
              <motion.div
                className="workflow-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="workflow-number">{idx + 1}</div>
                <div className="workflow-icon">{step.icon}</div>
                <Title level={4}>{step.title}</Title>
                <Paragraph>{step.desc}</Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Featured Projects Teaser */}
      {/* <section className="featured-teaser">
        <div className="featured-bg-noise"></div>
        <Title level={2}>Dự án nổi bật</Title>
        <Paragraph>Điểm qua một vài sản phẩm tâm huyết mình đã thực hiện.</Paragraph>

        <Row gutter={[32, 32]} className="teaser-grid">
          <Col xs={24} md={12}>
            <Card
              className="teaser-card"
              cover={<img alt="HRMS" src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=800&q=80" />}
              onClick={() => window.location.href = '/projects'}
            >
              <Card.Meta title="Hệ thống quản trị nhân sự" description="Xây dựng với NestJS & ReactJS" />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              className="teaser-card"
              cover={<img alt="E-commerce" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80" />}
              onClick={() => window.location.href = '/projects'}
            >
              <Card.Meta title="Nền tảng bán tranh nghệ thuật" description="Thương mại điện tử cao cấp" />
            </Card>
          </Col>
        </Row>

        <Button size="large" className="view-more-btn" icon={<ProjectOutlined />} onClick={() => window.location.href = '/projects'}>
          Xem toàn bộ dự án
        </Button>
      </section> */}

      {/* Final Contact CTA */}
      <motion.section
        className="final-cta-section"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="cta-content">
          <Title level={2}>Bắt đầu xây dựng ý tưởng của bạn ngay hôm nay?</Title>
          <Paragraph>Hãy cùng nhau tạo nên những sản phẩm tuyệt vời và đầy cảm hứng.</Paragraph>
          <Button
            type="primary"
            size="large"
            icon={<SendOutlined />}
            className="btn-final-impact"
            onClick={() => window.location.href = '/contact'}
          >
            Liên hệ với mình
          </Button>
        </div>
      </motion.section>

      <div className="scroll-hint-icon">
        <div className="scroll-line-animated"></div>
      </div>
    </div>
  );
};

export default HomePage;
