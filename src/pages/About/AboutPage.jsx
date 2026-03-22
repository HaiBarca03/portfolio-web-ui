import React from 'react';
import { Typography, Row, Col, Card, Timeline, Tag, Space, Divider, Progress } from 'antd';
import { motion } from 'framer-motion';
import {
  TrophyOutlined,
  BookOutlined,
  HeartOutlined,
  StarOutlined,
  ThunderboltOutlined,
  SmileOutlined,
  RocketOutlined,
  CoffeeOutlined
} from '@ant-design/icons';
import './AboutPage.css';

const { Title, Paragraph, Text } = Typography;

const AboutPage = () => {
  const achievements = [
    {
      year: '2020 - 2024',
      title: 'Tốt nghiệp Trường Đại học Công nghiệp Việt - Hung',
      desc: 'Bằng Cử nhân Công nghệ Thông tin - Loại Xuất sắc (GPA: 3.65/4.0)',
      icon: <TrophyOutlined style={{ color: '#faad14' }} />
    },
    {
      year: 'Hằng năm',
      title: 'Sinh viên Giỏi & Xuất sắc',
      desc: 'Đạt danh hiệu sinh viên Xuất sắc toàn diện trong suốt 4 năm học.',
      icon: <StarOutlined style={{ color: '#1890ff' }} />
    },
    {
      year: 'Định kỳ',
      title: 'Học bổng Khuyến khích học tập',
      desc: 'Giành nhiều suất học bổng loại Xuất sắc từ nhà trường qua các học kỳ.',
      icon: <BookOutlined style={{ color: '#52c41a' }} />
    }
  ];

  const personalityTraits = [
    { title: 'Tận tâm', desc: 'Luôn đặt hết tâm huyết vào từng dòng code và sản phẩm.', icon: <HeartOutlined /> },
    { title: 'Sáng tạo', desc: 'Tìm kiếm những giải pháp mới mẻ cho các vấn đề hóc búa.', icon: <ThunderboltOutlined /> },
    { title: 'Hòa đồng', desc: 'Dễ dàng thích nghi và làm việc nhóm hiệu quả.', icon: <SmileOutlined /> },
    { title: 'Kiên trì', desc: 'Không bỏ cuộc trước những bug khó hay deadline gấp.', icon: <RocketOutlined /> },
    { title: 'Kỷ luật', desc: 'Tuân thủ quy trình và luôn đảm bảo đúng tiến độ.', icon: <CoffeeOutlined /> }
  ];

  return (
    <div className="about-page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={10}>
            <motion.div
              className="about-avatar-wrapper"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="avatar-hex">
                <img src="https://res.cloudinary.com/dbzuqtojr/image/upload/v1772511305/avatar-user/avttexxt_dnwmtq.png" alt="Đoàn Đức Hải" />
              </div>
              <div className="gpa-badge">
                <Text strong>GPA 3.65</Text>
                <Text>Xuất Sắc</Text>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} lg={14}>
            <motion.div
              className="about-intro-text"
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Tag color="blue" className="role-tag">Backend Developer</Tag>
              <Title className="about-name">Mình là <span>Đoàn Đức Hải</span></Title>
              <Paragraph className="about-summary">
                Một kỹ sư phần mềm trẻ với niềm đam mê mãnh liệt trong việc xây dựng các hệ thống Backend mạnh mẽ và hiệu quả.
                Mình vừa tốt nghiệp loại **Xuất sắc** tại trường **Trường Đại học Công nghiệp Việt - Hung**.
                Với tư duy giải quyết vấn đề và nền tảng kiến thức vững chắc, mình luôn sẵn sàng đương đầu với những thử thách công nghệ mới.
              </Paragraph>
              <Space size="large" className="quick-stats">
                <div className="quick-stat-item">
                  <Title level={2}>4+</Title>
                  <Text type="secondary">Năm học tập & dự án</Text>
                </div>
                <Divider type="vertical" style={{ height: '40px' }} />
                <div className="quick-stat-item">
                  <Title level={2}>20+</Title>
                  <Text type="secondary">Dự án hoàn thành</Text>
                </div>
              </Space>
            </motion.div>
          </Col>
        </Row>
      </section>

      {/* Education & Achievements */}
      <section className="education-section">
        <Title level={2} className="section-title">Hành Trình Học Tập & Giải Thưởng</Title>
        <div className="timeline-wrapper">
          <Timeline mode="alternate">
            {achievements.map((item, index) => (
              <Timeline.Item
                key={index}
                dot={item.icon}
                className="timeline-item"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="achievement-card">
                    <Text type="secondary">{item.year}</Text>
                    <Title level={4}>{item.title}</Title>
                    <Paragraph>{item.desc}</Paragraph>
                  </Card>
                </motion.div>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </section>

      {/* Personality & Skills */}
      <section className="personality-section">
        <Title level={2} className="section-title">Tính Cách & Giá Trị Cốt Lõi</Title>
        <Row gutter={[24, 24]}>
          {personalityTraits.map((trait, index) => (
            <Col xs={24} md={8} lg={4} key={index} className="personality-col">
              <motion.div
                className="personality-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="trait-icon">{trait.icon}</div>
                <Title level={4}>{trait.title}</Title>
                <Text type="secondary">{trait.desc}</Text>
              </motion.div>
            </Col>
          ))}
          <Col xs={24} lg={4}>
            <div className="personality-card-more">
              <Title level={3}>& Khát khao học hỏi</Title>
            </div>
          </Col>
        </Row>
      </section>

      {/* Motivation Section */}
      <section className="motivation-section">
        <Card className="motivation-card">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2}>Triết lý của một Engineer</Title>
              <Paragraph italic className="quote">
                "Học lập trình không phải là học cách sử dụng một ngôn ngữ,
                mà là học cách giải quyết vấn đề một cách logic và sáng tạo nhất."
              </Paragraph>
              <Paragraph>
                Với mình, mỗi dòng code đều mang một sứ mệnh: tạo ra giá trị cho người dùng và sự ổn định cho doanh nghiệp.
                Mình không dừng lại ở những gì đã biết, mà luôn khao khát chinh phục những đỉnh cao mới trong ngành Kỹ thuật Phần mềm.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <div className="skill-progress-box">
                <div className="progress-item">
                  <div className="progress-label">Tư duy logic <Text type="secondary">95%</Text></div>
                  <Progress percent={95} strokeColor="#1890ff" showInfo={false} />
                </div>
                <div className="progress-item">
                  <div className="progress-label">Khả năng tự học <Text type="secondary">98%</Text></div>
                  <Progress percent={98} strokeColor="#52c41a" showInfo={false} />
                </div>
                <div className="progress-item">
                  <div className="progress-label">Làm việc nhóm <Text type="secondary">90%</Text></div>
                  <Progress percent={90} strokeColor="#722ed1" showInfo={false} />
                </div>
                <div className="progress-item">
                  <div className="progress-label">Tiếng Anh chuyên ngành <Text type="secondary">85%</Text></div>
                  <Progress percent={85} strokeColor="#faad14" showInfo={false} />
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </section>
    </div>
  );
};

export default AboutPage;
