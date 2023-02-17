import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function StirFry() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Hủ Tiếu/Mì Xào <br /> <Title level={4}>Stir Fried Noodles</Title>
      </Title>
      <Text>All items below can be made vegetarian</Text>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì Xào Dòn hoặc Xào Mềm, Đồ Biền <br />
                <Text strong>(MX1) </Text>Egg Noodles with Seafood
              </Text>
            }
            extra="$15.95"
          >
            Crispy or soft egg noodles w/ shrimp, squid, fish balls, mussels,
            crab meat, mixed vegetables topped w/ fried onion
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì Xào Dòn hoặc Xào Mềm Thập Cẩm <br />
                <Text strong>(MX2) </Text>Egg Noodles Meat Combo
              </Text>
            }
            extra="$14.95"
          >
            Crispy or soft egg noodles with beef, pork, chicken, mixed
            vegetables, topped w/ fried onion
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
          <Card
            title={
              <Text level={6}>
                Hủ Tiếu Bò Áp Chảo (Khô hoặc Nước) <br />
                Stir Fried Flat Rice Noodles (With /Without Gravy)
              </Text>
            }
            extra="$14.95"
          >
            <Text strong>(MX3) </Text> Stir fried flat rice noodles with beef,
            mixed vegetables, carrot and mushroom, topped w/ fried onion
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Hủ Tiếu Xào Chợ Lớn <br />
                Stir Fried Rice Noodles Combination
              </Text>
            }
            extra="$14.95"
          >
            <Text strong>(MX4) </Text> Stir fried rice noodles with chicken,
            shrimp, fish balls, bean sprout and onions, topped w/ fried onion
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
          <Card
            title={
              <Text level={6}>
                Hủ Tiếu Xào Thái <br /> Pad Thai Noodles
              </Text>
            }
            extra="$15.95"
          >
            <Text strong>(MX5) </Text> Stir fried rice noodles with shrimp,
            chicken, fish balls, bean sprouts, and onions, topped with peanuts
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Bánh Lọt Xào Thập Cẩm <br />
                Stir Fried Pin Rice Noodles Combination
              </Text>
            }
            extra="$14.95"
          >
            <Text strong>(MX6) </Text> Assorted pin rice noodles with shrimp,
            chicken, fish balls, bean sprouts and onions, topped w/ fried onion
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default StirFry;
