import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function Rice() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Cơm Phần <br /> <Title level={4}>Grilled Dishes</Title>
      </Title>
      <Text>
        All items below are served with white rice, lettuce, cucumber, pickled
        carrots, pickled cabbage and fish sauce.
        <br />
        <Text strong>Extra: </Text> <br />
        <Row justify="center" gutter={16}>
          <Col>
            <Text>
              Egg: $1.75 <br />
              Meat: $4.95 <br />
            </Text>
          </Col>
          <Col>
            <Text>
              Rice: $2.75 <br />
              Tomato Rice: $4.95 <br />
            </Text>
          </Col>
        </Row>
        (Except GR5): $5.49 <br />
        <Text strong>Substitute: </Text> Tomato Rice (Cơm Đỏ) : $2.49
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
                <Text strong>(GR1) </Text>Bò Nướng Sả <br /> Grilled Lemongrass
                Beef
              </Text>
            }
            extra="$11.95"
          >
            Marinated sliced beef with lemongrass
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(GR2) </Text>Thịt Heo Nướng <br /> Grilled Pork
              </Text>
            }
            extra="$10.95"
          >
            Marinated sliced pork
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
                <Text strong>(GR3) </Text>Gà Nướng Chánh <br /> Grilled Lemon
                Chicken Beef
              </Text>
            }
            extra="$10.95"
          >
            Marinated boneless chicken marinated in lemon sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(GR4) </Text>Gà Nướng Sả Ớt <br />
                Grilled Lemongrass Chicken
              </Text>
            }
            extra="$10.95"
          >
            Marinated boneless chicken in spicy garlic lemongrass sauce
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
                <Text strong>(GR5) </Text>Tôm Nướng <br /> Grilled Shrimp
              </Text>
            }
            extra="$11.95"
          >
            Marinated large shrimp in garlic sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(GR6) </Text>Bò Lá Nho <br /> Beef Wrapped in
                GrapeLeaves
              </Text>
            }
            extra="$11.50"
          >
            Marinated ground beef wrapped in grape leaves
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(GR7) </Text>Cơm Ba Món <br /> Combo Rice Platter
              </Text>
            }
            extra="$12.95"
          >
            Choice of any 3 meats from GR1 to GR6
          </Card>
        </Col>
      </Row>
      <Title level={2}>Rice Dishes</Title>
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
                <Text strong>(R1) </Text>Cơm Đỏ Gà Xối Mỡ <br /> Crispy Maryland
                Chicken
              </Text>
            }
            extra="$11.50"
          >
            Crispy fried chicken served with tomato rice & ginger sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(R2) </Text>Cơm Đỏ Chim Cút <br /> Roast Quail (1)
              </Text>
            }
            extra="$10.50"
          >
            Crispy roasted quail served with tomato rice & fish sauce
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
                <Text strong>(R3) </Text>Cơm Tấm Sườn Trứng <br />
                Grilled Pork Chop & Fried Egg
              </Text>
            }
            extra="$10.95"
          >
            Served with broken rice and fish sauce
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(R4) </Text>Cơm Tấm Bì Sườn Chả <br />
                Combination Broken Rice Platter
              </Text>
            }
            extra="$12.95"
          >
            Grilled pork chop, meat loaf, and shredded pork served with broken
            rice and fish sauce
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                <Text strong>(R5) </Text>Cơm Tấm Sườn Nướng 2 Miếng <br />2
                Grilled Pork Chops
              </Text>
            }
            extra="$14.95"
          >
            Served with broken rice and fish sauce
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Rice;
