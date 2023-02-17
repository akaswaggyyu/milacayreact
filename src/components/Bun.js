import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function Bun() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Bún <br /> <Title level={4}>Vermicelli</Title>
      </Title>
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
                Bún Bò Huế <br />
                Lemongrass Beef Noodles Soup
              </Text>
            }
            extra="$12.95"
          >
            <Text strong>(BB)</Text> Vermicelli noodles served with sliced beef,
            Vietnamese ham, pork hock, pork blood, spicy lemongrass beef soup
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Bún Gà Cari <br /> Curry Chicken with Vermicelli Noodle Soup
              </Text>
            }
            extra="$12.95"
          >
            <Text strong>(BC)</Text> Vermicelli noodles served in spicy curry
            soup with chunks of chicken and sweet potatoes
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
                <Text strong>(BH1) </Text>Bánh Hỏi Thịt Nướng <br /> Grilled
                Pork with Fine Vermicelli
              </Text>
            }
            extra="$12.95"
          >
            Lettuce, pickled carrots, cucumber, basil, topped with fried garlic
            served with fish sauce <br />
            <Text strong>*rice paper (5 sheets) : $1.95</Text>
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(BH3) </Text>Bánh Xèo <br /> Vietnamese Pancake
              </Text>
            }
            extra="$14.95"
          >
            Vietnamese pancake stuffed with shrimp, sliced pork, and bean
            sprouts. Served with fish sauce.
          </Card>
        </Col>
      </Row>
      <Text>
        B1 - B6 below are served over vermicelli, bean sprouts, lettuce, pickled
        carrots, cucumber, topped with crushed peanuts. Served with fish sauce.{" "}
        <br />
        (Can be served without crush peanuts upon request)
      </Text>
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
                <Text strong>(B1) </Text>Bún Bò Nướng Sả
              </Text>
            }
            extra="$11.95"
          >
            Vermicelli Noodles with Grilled Lemongrass Beef
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(B2) </Text>Bún Thịt Heo Nướng
              </Text>
            }
            extra="$10.95"
          >
            Vermicelli Noodles with Grilled Pork
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
                <Text strong>(B3) </Text>Bún Gà Nướng Chanh
              </Text>
            }
            extra="$10.95"
          >
            Vermicelli Noodles with Grilled Lemon Chicken
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(B4) </Text>Bún Tôm Nướng
              </Text>
            }
            extra="$11.95"
          >
            Vermicelli Noodles with Grilled Shrimp
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
                <Text strong>(B5) </Text>Bún Chả Giò
              </Text>
            }
            extra="$10.95"
          >
            Vermicelli Noodles with Fried Spring Rolls
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(B6) </Text>Bún Ba Món
              </Text>
            }
            extra="$12.95"
          >
            Combo Vermicelli Noodles (Choice of 3 items from B1 to B5)
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Bun;
