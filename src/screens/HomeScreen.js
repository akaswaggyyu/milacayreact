import React from "react";
import { Typography } from "antd";

const { Title } = Typography;
const day = new Date().getDay();
var hours = "Open 10am - 8pm";
if (day == 2) {
  hours = "Closed";
}

function HomeScreen() {
  return (
    <>
      <Title level={3}>Today: {hours}</Title>
    </>
  );
}

export default HomeScreen;
