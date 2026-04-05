import React from 'react';
import { Row, Col, Typography, Space, Tooltip } from 'antd';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { SiFacebook, SiGmail } from 'react-icons/si';
import { Icon } from '@iconify/react';
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
              <Tooltip title="Github">
                <Link href="https://github.com" target="_blank"><GithubOutlined /></Link>
              </Tooltip>
              <Tooltip title="Linkedin">
                <Link href="https://www.linkedin.com/in/ddh03/" target="_blank"><LinkedinOutlined /></Link>
              </Tooltip>
              <Tooltip title="Facebook">
                <Link href="https://www.facebook.com/haibarca.823/" target="_blank"><SiFacebook /></Link>
              </Tooltip>
              <Tooltip title="Zalo">
                <Link href="https://zalo.me/0394558656" target="_blank"><Icon icon="simple-icons:zalo" /></Link>
              </Tooltip>
              <Tooltip title="Gmail">
                <Link href="mailto:haidd.contactjob@gmail.com" target="_blank"><SiGmail /></Link>
              </Tooltip>
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
