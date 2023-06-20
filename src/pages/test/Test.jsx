import React from 'react';
import { Col, Row, Divider } from 'antd';
import { useState } from 'react';
import './styles.css';
function Test() {
  return (
    <>
      <Divider orientation="left">sub-element align full</Divider>
      <Row justify="space-around">
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
    </>
  );
}
export default Test;
