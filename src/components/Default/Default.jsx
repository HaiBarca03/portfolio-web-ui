import React from 'react';
import Header from "../Header/Header";
import AppFooter from "../Footer/Footer";
import AnimatedBackground from "../layout/AnimatedBackground";
import "./Default.css";

const Default = ({ children }) => {
  return (
    <div className="layout-container">
      <AnimatedBackground />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <AppFooter />
    </div>
  );
};

export default Default;
