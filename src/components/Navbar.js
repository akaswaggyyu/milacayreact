import React from "react";
import { Link } from "react-router-dom";
import { Divider, Typography } from "antd";

const { Title } = Typography;

function Navbar() {
  return (
    <div>
      <Title level={3} style={{ float: "left" }}>
        Mi La Cay
      </Title>
      <Link to="/">Home</Link>
      <Divider type="vertical" />
      <Link to="/about">About</Link>
      <Divider type="vertical" />
      <Link to="/menu">Menu</Link>
      <Divider type="vertical" />
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
