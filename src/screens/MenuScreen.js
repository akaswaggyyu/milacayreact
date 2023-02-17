import React from "react";
import { Button, Typography, Divider, Collapse } from "antd";
import Appetizers from "../components/Appetizers";
import Noodle from "../components/Noodle";
import Pho from "../components/Pho";
import Bun from "../components/Bun";
import Rice from "../components/Rice";
import StirFry from "../components/StirFry";
import Banhmi from "../components/Banhmi";
import Drinks from "../components/Drinks";

const { Panel } = Collapse;
const { Title } = Typography;

function MenuScreen() {
  return (
    <div>
      <Title>Menu</Title>
      <Divider />
      <Button type="primary">
        <a href="../menu.pdf">PDF Menu</a>
      </Button>
      <Collapse>
        <Panel header="Appetizers" key="1">
          <Appetizers />
        </Panel>
        <Panel header="Noodle Soup" key="2">
          <Noodle />
        </Panel>
        <Panel header="Phở" key="3">
          <Pho />
        </Panel>
        <Panel header="Bún|Vermicelli" key="4">
          <Bun />
        </Panel>
        <Panel header="Grilled Dishes" key="5">
          <Noodle />
        </Panel>
        <Panel header="Rice Dishes" key="6">
          <Rice />
        </Panel>
        <Panel header="Stir Fry" key="7">
          <StirFry />
        </Panel>
        <Panel header="Bánh Mì" key="8">
          <Banhmi />
        </Panel>
        <Panel header="Beverages & Desserts" key="9">
          <Drinks />
        </Panel>
      </Collapse>
    </div>
  );
}

export default MenuScreen;
