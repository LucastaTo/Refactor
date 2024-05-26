import React from "react";
import { Layout } from "antd";
import HeaderContainer from "../header";
import FooterContainer, { LinkProps } from "../footer";

const { Content } = Layout;
interface IProps {
  children: React.ReactNode;
}
const arr1: LinkProps[] = [
  { label: "Explore", link: "link1" },
  { label: "Benchmarking", link: "link2" },
  { label: "Collaboration", link: "link3" },
  { label: "Public profile", link: "link4" },
];

const arr2: LinkProps[] = [
  { label: "About Us", link: "link1" },
  { label: "Feedback", link: "link2" },
  { label: "Community", link: "link3" },
];
const arr3: LinkProps[] = [
  { label: "Resources", link: "link1" },
  { label: "Term of Service", link: "link2" },
  { label: "Privacy Policy", link: "link3" },
  { label: "Help & Support", link: "link4" },
];

const LayoutContainer: React.FC<IProps> = ({ children }) => {
  const totalArray: LinkProps[][] = [arr1, arr2, arr3];
  return (
    <Layout className="custom-layout">
      <HeaderContainer />
      <Content className="custom-content">{children}</Content>
      <FooterContainer totalArray={totalArray} />
    </Layout>
  );
};

export default LayoutContainer;
