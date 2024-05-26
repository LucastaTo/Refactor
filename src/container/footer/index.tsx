import React from "react";
import { Col, Layout, Row } from "antd";

const { Footer } = Layout;

export interface LinkProps {
  label: string;
  link: string;
}

// Chỉ định rõ props totalArray ở đây
interface FooterContainerProps {
  totalArray: LinkProps[][];
}

// Sử dụng FooterContainerProps trong React.FC
const FooterContainer: React.FC<FooterContainerProps> = ({ totalArray }) => {
  return (
    <Footer className="custom-footer">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-parent">
        {totalArray.map((arr, arrIndex) => (
          <Col
            className="gutter-row"
            span={24 / totalArray.length}
            key={arrIndex}
          >
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
              className="row-child"
            >
              {arr.map((item, index) => (
                <Col className="gutter-row" span={24} key={index}>
                  {item.label}
                </Col>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </Footer>
  );
};

export default FooterContainer;
