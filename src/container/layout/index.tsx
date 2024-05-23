import React from "react";
import { Layout } from "antd";
import HeaderContainer from "../header";

const { Content, Footer } = Layout;

interface IProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<IProps> = ({ children }) => {
  return (
    <Layout className="custom-layout">
      <HeaderContainer />
      <Content className="custom-content">{children}</Content>
      <Footer className="custom-footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutContainer;
