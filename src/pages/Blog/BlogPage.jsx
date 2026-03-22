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
    id: 4,
    title: "Lộ trình Backend Developer: Từ Zero đến Production",
    date: "20 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["Backend", "Career", "Roadmap"],
    excerpt: "Backend không chỉ là viết API. Để trở thành một Backend Developer thực thụ, bạn cần hiểu từ HTTP, RESTful API, Database (SQL/NoSQL), Authentication (JWT, OAuth) cho đến caching và message queue. Lộ trình chuẩn nên bắt đầu từ Node.js hoặc Java, sau đó học sâu về hệ quản trị cơ sở dữ liệu như PostgreSQL, MongoDB. Khi đã vững, hãy tiếp cận kiến trúc hệ thống, scaling, Docker và CI/CD. Điều quan trọng nhất không phải là học nhiều công nghệ, mà là hiểu cách chúng hoạt động và kết hợp với nhau trong một hệ thống thực tế.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
  },
  {
    id: 5,
    title: "So sánh các ngôn ngữ Backend phổ biến: Node.js, Java, .NET",
    date: "18 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["Backend", "NodeJS", "Java", ".NET"],
    excerpt: "Mỗi ngôn ngữ backend đều có thế mạnh riêng. Node.js phù hợp cho hệ thống realtime và phát triển nhanh nhờ JavaScript fullstack. Java (Spring Boot) mạnh về hệ thống lớn, enterprise với độ ổn định cao. .NET lại tối ưu hiệu năng tốt và tích hợp sâu với hệ sinh thái Microsoft. Việc lựa chọn không nên dựa trên 'hot trend' mà phải dựa vào yêu cầu dự án, team và khả năng mở rộng lâu dài. Một developer giỏi không chỉ biết dùng framework mà còn hiểu cách tối ưu và trade-off giữa các công nghệ.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
  },
  {
    id: 6,
    title: "NestJS vs Spring Boot: Lựa chọn nào cho Backend hiện đại?",
    date: "16 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["NestJS", "Spring Boot", "Backend"],
    excerpt: "NestJS mang lại trải nghiệm developer rất tốt với TypeScript, kiến trúc module rõ ràng và dễ mở rộng. Trong khi đó, Spring Boot là 'ông lớn' trong hệ sinh thái Java với hệ thống mạnh mẽ, bảo mật và chuẩn enterprise. Nếu bạn làm startup hoặc MVP, NestJS là lựa chọn nhanh và linh hoạt. Nếu bạn xây hệ thống lớn, nhiều service và yêu cầu ổn định cao, Spring Boot sẽ là lựa chọn an toàn hơn. Điều quan trọng là hiểu rõ kiến trúc chứ không phải framework.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80"
  },
  {
    id: 7,
    title: "Tư duy thiết kế hệ thống: Làm sao để scale lên hàng triệu user?",
    date: "14 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["System Design", "Scalability", "Architecture"],
    excerpt: "Thiết kế hệ thống không chỉ là vẽ sơ đồ mà là hiểu cách dữ liệu và traffic di chuyển trong hệ thống. Khi scale, bạn cần nghĩ đến load balancing, caching (Redis), database sharding, message queue (Kafka, RabbitMQ). Ngoài ra, cần cân nhắc giữa consistency và availability (CAP theorem). Một hệ thống tốt không phải là hệ thống phức tạp nhất, mà là hệ thống đơn giản nhưng đủ để scale khi cần. Hãy luôn bắt đầu từ monolith, sau đó mới tách dần sang microservices khi thực sự cần thiết.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
  },
  {
    id: 8,
    title: "Git & GitHub cho Developer: Không chỉ là commit code",
    date: "12 Tháng 3, 2026",
    author: "Đoàn Đức Hải",
    tags: ["Git", "GitHub", "Collaboration"],
    excerpt: "Git không chỉ là công cụ lưu code, mà là nền tảng cho teamwork hiệu quả. Bạn cần nắm rõ các khái niệm như branching strategy (Git Flow, trunk-based), pull request, code review và resolve conflict. GitHub còn cung cấp CI/CD, issue tracking và project management. Một developer chuyên nghiệp không chỉ viết code tốt mà còn biết cách quản lý code, làm việc nhóm và maintain project lâu dài. Hãy học Git như một kỹ năng cốt lõi, không phải phụ trợ.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1200&q=80"
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
