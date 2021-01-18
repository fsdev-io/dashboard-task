import React from "react";
import { Row } from "antd";
import styled from "styled-components";
import Card from "./Card";

import money from "../../icons/money.svg";
import users from "../../icons/users.svg";
import sale from "../../icons/sale.svg";
import complaint from "../../icons/complaint.svg";
import Production from "./Production";
import GeoMap from "./GeoMap";

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  margin: 12px 0 18px 20px;
`;

const StyledRow = styled(Row)`
  margin-bottom: 16px;
`;

const DashboardComponent = ({ data }) => (
  <Container>
    <Title>React Dashboard</Title>
    <StyledRow gutter={[16, 16]}>
      <Card name="Total Profit" type="profit" icon={money} prefix="$" />
      <Card name="Active Users" type="users" icon={users} />
      <Card name="New Orders" type="orders" icon={sale} />
      <Card name="Open Complaints" type="complaints" icon={complaint} />
    </StyledRow>
    <Row gutter={[16, 16]}>
      <Production />
      <GeoMap />
    </Row>
  </Container>
);

export default DashboardComponent;
