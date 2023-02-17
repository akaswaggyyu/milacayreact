import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function Pho() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>
        Phở <br /> <Title level={4}>Beef Noodle Soup</Title>
      </Title>
      <Text>
        Served with a side of bean sprouts, jalapeño, fresh basil leaves, & lime
      </Text>
      <Row justify="space-between">
        <Col>
          <Title level={5}>Small Bowl: $9.95</Title>
          <Text>(P8 & P10 $10.50)</Text>
        </Col>
        <Col>
          <Title level={5}>Large Bowl: $10.95</Title>
          <Text>(P8 & P10 $11.50)</Text>
        </Col>
      </Row>
      <Text>
        <Text strong>Extra:</Text> <br />
        Egg Noodles $2.49 <br />
        Rice Noodles $2.49 <br />
        Meat $4.50 <br />
        Pickled Onion $2.00 <br />
        House Special P10 Sauce $0.75 <br />
        <Text strong>Substitute:</Text> for Egg Noodles $1.49
        <br />
        Each carry out soup container: add $0.50
      </Text>
      <Row
        gutter={{
          md: 24,
          lg: 32,
        }}
        justify="center"
      >
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Tái Nạm Gầu Gân Sách</Text>} extra="P1">
            Sliced eye-round steak, well-done flank, brisket, soft tendon and
            bible tripe
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Chín Nạm Gầu Gân Sách</Text>} extra="P2">
            Sliced well-done brisket and flank, soft tendon, and bible tripe
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
          <Card title={<Text level={6}>Tái Nạm</Text>} extra="P3">
            Sliced eye-round steak, and well-done flank
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Tái Chín</Text>} extra="P4">
            Sliced eye-round steak and well-done brisket
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
          <Card title={<Text level={6}>Tái</Text>} extra="P5">
            Sliced eye-round steak
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Bò Viên</Text>} extra="P6">
            Beef balls
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
          <Card title={<Text level={6}>Phở Rau</Text>} extra="P7">
            Broccoli, napa, carrots, and mushrooms your choice of beef or
            vegetarian broth
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={<Text level={6}>Phở Đặc Biệt - Phở Special</Text>}
            extra="P8"
          >
            Sliced eye-round steak, well-done flank, brisket, soft tendon bible
            tripe, and beef balls
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
          <Card title={<Text level={6}>Phở Gà</Text>} extra="P9">
            Sliced chicken breast
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card title={<Text level={6}>Phở La Cay</Text>} extra="P10">
            Sliced eye round steak and well-done brisket in spicy beef broth
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Pho;
