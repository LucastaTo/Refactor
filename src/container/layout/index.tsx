import React, { useMemo, useState } from "react";
import { Button, Image, Layout, Menu, Tabs } from "antd";
import { PiPenNibStraight } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";

const { Header, Content, Footer } = Layout;

const items = [
  { label: "Faculty", icon: <FaUserGraduate /> },
  { label: "Institution", icon: <PiPenNibStraight /> },
  { label: "Venue", icon: <PiPenNibStraight /> },
  { label: "Concept", icon: <PiPenNibStraight /> },
].map((item, index) => ({
  key: String(index + 1),
  label: (
    <>
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {item.icon} {item.label}
      </span>
    </>
  ),
  children: `Content of tab ${index}`,
}));

const OperationsSlot: Record<PositionType, React.ReactNode> = {
  left: (
    <Button className="tabs-extra-demo-button">
      <img
        height={40}
        width={40}
        src="https://academic.online/static/media/logo4.f83fb61768e8c265f7d4.png"
      />
    </Button>
  ),
  right: <Button>Right Extra Action</Button>,
};

type PositionType = "left" | "right";

interface IProps {
  children: React.ReactNode;
}

const LayoutContainer: React.FC<IProps> = ({ children }) => {
  const position: PositionType[] = ["left", "right"];

  const slot = useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {}
    );
  }, [position]);

  return (
    <Layout className="custom-layout">
      <Header className="custom-header">
        <Tabs
          className="custom-topBar"
          tabBarExtraContent={slot}
          items={items}
        />
      </Header>
      <Content className="custom-content">{children}</Content>
      <Footer className="custom-footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutContainer;
