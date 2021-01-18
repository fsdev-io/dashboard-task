import React from "react";
import styled from "styled-components";
import { Card, Col, Select, Statistic } from "antd";

const { Option } = Select;

const StyledStatistic = styled(Statistic)`
  margin-bottom: 12px;

  .ant-statistic-title {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.7);
  }

  .ant-skeleton {
    height: 50px;
  }

  .ant-statistic-content {
    font-size: 32px;

    @media (max-width: 576px) {
      font-size: 28px;
    }
  }
`;

const Icon = styled.img`
  position: absolute;
  height: 100px;
  right: 16px;
  bottom: 16px;
  opacity: 0.15;

  @media (max-width: 576px) {
    height: 60px;
  }
`;

const CardComponent = ({
  name,
  value,
  loading,
  statisticProps,
  scale,
  handleChangeScale,
  icon,
}) => (
  <Col xs={24} sm={12} lg={6}>
    <Card>
      <StyledStatistic
        title={name}
        value={value}
        loading={value === null || loading}
        groupSeparator=" "
        {...statisticProps}
      />
      <Select defaultValue="monthly" value={scale} onChange={handleChangeScale}>
        <Option value="daily">Daily</Option>
        <Option value="weekly">Weekly</Option>
        <Option value="monthly">Monthly</Option>
        <Option value="yearly">Yearly</Option>
      </Select>
      <Icon alt="icon" src={icon} />
    </Card>
  </Col>
);

export default CardComponent;
