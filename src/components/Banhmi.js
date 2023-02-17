import React from "react";
import { Col, Row, Space, Typography } from "antd";

const { Title } = Typography;
const style = {
  padding: "16px",
};

function Banhmi() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Bánh Mì <br />
        <Title level={4}>
          Vietnamese Sub <br /> $7.50
        </Title>
      </Title>
      <Row gutter={16} justify="center">
        <Col>
          Thịt Nguội - Cold Cut <br />
          Thịt Heo Nướng - Grilled Pork <br />
          Thịt Bò Nướng - Grilled Beef <br />
          Thịt Gà Nướng - Grilled Chicken <br />
          Bánh Mì Đậu Hủ - Tofu (Spicy Lemongrass or Mild)
        </Col>
      </Row>
    </Space>
  );
}

export default Banhmi;
