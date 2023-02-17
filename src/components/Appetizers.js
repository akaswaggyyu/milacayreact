import React from "react";
import { Col, Row, Card, Space } from "antd";

const style = {
  padding: "16px",
};

function Appetizers() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title="Chả Giò - Spring Roll (2)." extra="$4.50">
            Fried wrapped rolls with minced chicken, taro, carrots, bean thread
            noodles and spices, served with fish sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title="Gỏi Cuốn - Summer Roll (2)" extra="$4.50">
            Steamed shrimp, lean sliced pork, lettuce, and vermicelli noodles
            wrapped in rice paper, served with peanut sauce
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
            title="Gỏi Cuốn Chay - Vegetarian
Summer Roll (2)."
            extra="$3.95"
          >
            Tofu, lettuce, pickled carrots, and vermicelli noodles wrapped in
            rice paper, served with peanut sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title=" Bò Nướng Lá Nho - Beef Wrapped
in Grape Leave (3)"
            extra="$8.95"
          >
            Marinated ground beef wrapped in grape leaves , topped with crushed
            peanuts and fried onions. Served with fish sauce
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
          <Card title=" Chim Cút - Roasted Quail (2)" extra="$9.50">
            Crispy roasted quail, served with lettuce, pickled carrots, cabbage,
            and salt & pepper in lime juice
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title="Tôm Nướng - Grilled Shrimp" extra="$8.95">
            Marinated jumbo shrimp, topped with oiled scallions and crushed
            peanuts, served with fish sauce
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
          <Card title="Gỏi Đu Đủ Thái - Spicy Papaya Salad ." extra="$10.95">
            Shredded papaya, tomato, basil, and grilled shrimp served with the
            spicy sauce & crushed peanuts
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title="Gỏi Gà - Chicken Salad" extra="$8.95">
            Tender chicken breast mixed with shredded cabbage, red onion, tossed
            with fish sauce & crushed peanuts
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
          <Card title="Gòi Tôm or Shrimp Salad" extra="$9.95">
            Steamed shrimp mixed with shredded cabbage, red onion, tossed with
            fish sauce & crushed peanuts
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title="Dầu Chảo Quảy - Fried Breadstick (1)" extra="$2.50">
            Fried Breadstick
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Appetizers;
