import React from "react";
import { Card, Col } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  @media (max-width: 992px) {
    .ant-card-body {
      padding: 0;
    }
  }
`;

const Title = styled.h2`
  font-size: 24px;

  @media (max-width: 992px) {
    padding: 18px;
  }
`;

const ProductionComponent = ({ chartElement }) => (
  <Col xs={24} xl={12}>
    <StyledCard>
      <Title>Production</Title>
      <canvas ref={chartElement} />
    </StyledCard>
  </Col>
);

export default ProductionComponent;
