import React from "react";
import { Col, Row, Card, Space, Typography } from "antd";

const { Title, Text } = Typography;
const style = {
  padding: "16px",
};

function Noodle() {
  return (
    <Space direction="vertical" size="middle" style={style}>
      <Title level={2}>Mì/Hủ Tiếu Noodle Soup</Title>
      <Text>
        Choice of either egg noodles or rice noodles soup <br />
        <Text strong>Substitute:</Text> <br />
        Clear Noodles $1.49 <br />
        <Text strong>Extra:</Text> <br />
        Egg Noodles $2.49 <br />
        Clear Noodles $2.95 <br />
        Rice Noodles $2.49 <br />
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
                Mì/Hủ Tiếu La Cay <br /> La Cay Noodle Soup
              </Text>
            }
            extra="$10.95"
          >
            Sliced pork, fried shrimp cracker, squid, shrimp, fish balls, sliced
            pork heart & liver, topped with fried minced garlic & scallions in
            pork broth. (Broth in/on side)
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì/Hủ Tiếu La Cay Thập Cẩm <br /> La Cay Noodle Combination Soup
              </Text>
            }
            extra="$10.95"
          >
            Sliced B.B.Q. pork, fried shrimp cracker, squid, shrimp, fish balls,
            sliced pork heart & liver, topped with fried minced garlic &
            scallions in pork broth. (Broth in/on side)
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
                Mì/Hủ Tiếu Nam Vang <br />
                Phnom Penh Noodle Soup
              </Text>
            }
            extra="$10.95"
          >
            Sliced pork, minced pork, shrimp, squid, fish balls, sliced pork
            heart & liver, topped with fried minced garlic in pork broth(Broth
            in/on side)
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì/Hủ Tiếu Gà Xối Mỡ <br /> Crispy Maryland Chicken Noodle Soup
              </Text>
            }
            extra="$11.95"
          >
            Fried chicken thigh served with minced pork, fried shallots, fried
            minced garlic, and scallions in chicken broth (Broth in/on side)
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
                Mì/Hủ Tiếu Chim Cút <br /> Roasted Quail w/ Noodle Soup
              </Text>
            }
            extra="$11.95"
          >
            Roasted quail served with minced pork, fried shallots, fried minced
            garlic, and scallions in chicken broth (Broth in/on side)
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Hủ Tiếu Dai Mỹ Tho <br />
                Clear Glass Noodle Soup
              </Text>
            }
            extra="$11.95"
          >
            Sliced B.B.Q pork, squid, shrimp, fish balls topped with scallions
            and fried minced garlic in pork broth (Broth in/on side)
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
                Mì/Hủ Tiếu Vịt Tiềm <br /> Roast Duck Egg/Rice Noodle Soup
              </Text>
            }
            extra="$11.95"
          >
            Roasted duck served with chinese vegetables in 5-spice broth
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì/Hủ Tiếu Bò Kho <br />
                Beef Stew Egg/Rice Noodle Soup
              </Text>
            }
            extra="$11.95"
          >
            Beef stew served with egg noodle, cubed beef briskets, carrots, and
            onions
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
                Mì/Hủ Tiếu Bò Saté <br />
                Egg/Rice Noodle with Sate Beef Soup
              </Text>
            }
            extra="$11.95"
          >
            Sliced eye-round steak and sliced tomatoes with spicy sate soup,
            topped with peanuts and scallions
          </Card>
        </Col>
        <Col className="gutter-row" xs={20} sm={16} md={12} lg={12} xl={12}>
          <Card
            title={
              <Text level={6}>
                Mì/Hủ Tiếu Đồ Biển <br />
                Seafood Egg/Rice Noodle Soup
              </Text>
            }
            extra="$12.95"
          >
            Shrimp, squid, mussels, fish balls, and crab meat in pork broth.
          </Card>
        </Col>
      </Row>
    </Space>
  );
}

export default Noodle;
