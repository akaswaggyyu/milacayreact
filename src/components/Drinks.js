import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function Drinks() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Giải Khát <br /> <Title level={4}>Beverages & Dessert</Title>
      </Title>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Soda</Text>} extra="$1.75">
            (Coke, Diet Coke, Sprite, Sunkist, Pepsi) <br />
            Jarritos, Fanta, Coke Bottle <Text strong>($2.79)</Text>
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Sữa Đậu Nành</Text>} extra="$2.49">
            Soybean Drink
          </Card>
        </Col>
      </Row>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Trà Đá</Text>} extra="$1.95">
            Non-sweetened Jasmine Iced Tea or Hot Tea
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Nước Dừa Tươi</Text>} extra="$3.95">
            Young Coconut Juice
          </Card>
        </Col>
      </Row>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>French Coffee</Text>} extra="$4.49">
            Hot or Ice Cafe with Condensed Milk
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Homemade Lemonade</Text>} extra="$3.25">
            With Club Soda <Text strong>($3.95)</Text>
          </Card>
        </Col>
      </Row>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Trà Sữa Đá Thái</Text>} extra="$3.95">
            Thai Iced Tea
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Chè Ba Mà</Text>} extra="$5.49">
            Tri-Colored Bean Dessert
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Sinh Tố Trân Châu</Text>} extra="$4.79">
            Smoothie with Tapioca Pearls (Fresh Fruit) <br />
            <Text strong>Flavors: </Text> Payapya, Strawberry, Red Bean, Thai
            Tea <br />
            <Text strong>Flavors: </Text> Durian, Mango, Avocado, Taro{" "}
            <Text strong>($5.95)</Text>
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Drinks;
