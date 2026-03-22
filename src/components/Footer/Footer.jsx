import React from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import './Footer.css';

const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <Row justify="space-between" align="middle" gutter={[24, 24]}>
          <Col xs={24} md={12}>
            <div className="footer-logo">
              <img src="https://res.cloudinary.com/dbzuqtojr/image/upload/v1772511305/avatar-user/avttexxt_dnwmtq.png" alt="Avatar" />
              <div className="footer-brand">
                <Text strong className="brand-name">Hai.dd</Text>
                <Text type="secondary" className="brand-tagline">Software Engineer</Text>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} className="footer-social-col">
            <Space size="large" className="social-icons">
              <Link href="#" target="_blank"><GithubOutlined /></Link>
              <Link href="#" target="_blank"><LinkedinOutlined /></Link>
              <Link href="#" target="_blank"><TwitterOutlined /></Link>
            </Space>
          </Col>
        </Row>
        <div className="footer-bottom">
          <Text type="secondary">© 2026 Hai.dd</Text>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
