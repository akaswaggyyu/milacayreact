import React from "react";
import { Typography } from "antd";

const { Text } = Typography;
const year = new Date().getFullYear();

function FooterComponent() {
  return (
    <div>
      <Text type="secondary">&copy;Copyright {year.toString()} Mi La Cay</Text>
    </div>
  );
}

export default FooterComponent;
