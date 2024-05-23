import React from "react";
import { Layout, Menu, Select } from "antd";
import { PiPenNibStraight } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import SearchInput from "../../reusable/search-input";

const { Header } = Layout;

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
}));

const HeaderContainer: React.FC = () => (
  <Header className="custom-header">
    <div className="custom-topBar">
      <div className="left-topBar">
        <img src="https://academic.online/static/media/logo4.f83fb61768e8c265f7d4.png" />
        <Menu theme="dark" mode="horizontal" items={items} />
      </div>
      <div className="right-topBar">
        <SearchInput
          placeholder="input search text"
          className="custom-search-input"
        />
        <Select
          defaultValue="lucy"
          className="options"
          style={{ width: 120 }}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </div>
    </div>
  </Header>
);

export default HeaderContainer;
