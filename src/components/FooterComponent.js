import React from "react";
import { Typography, Space } from "antd";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import yelp from "../yelp.png";

const { Text } = Typography;
const year = new Date().getFullYear();

function FooterComponent() {
  return (
    <Space
      direction="vertical"
      style={{
        display: "flex",
      }}
    >
      <Space type="default">
        <a href="https://www.instagram.com/mi_la_cay_wheaton/?hl=en">
          <InstagramFilled style={{ fontSize: "24px", color: "black" }} />
        </a>
        <a href="https://www.facebook.com/Mi-La-Cay-515293128543968/">
          <FacebookFilled style={{ fontSize: "24px", color: "black" }} />
        </a>
        <a href="https://www.yelp.com/biz/mi-la-cay-silver-spring-3">
          <img src={yelp} alt="yelp-logo" width="24" height="24" />
        </a>
      </Space>
      <br />
      <Text type="secondary">&copy;Copyright {year.toString()} Mi La Cay</Text>
    </Space>
  );
}

export default FooterComponent;
