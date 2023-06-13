import React from 'react';
import './styles.css';
import { Button, Form, Input, Radio, Select, Col, Row, Divider } from 'antd';
import { useState } from 'react';

const layout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 0
  }
};
const { Option } = Select;
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
};
/* eslint-enable no-template-curly-in-string */

const onFinish = values => {
  console.log(values);
};
function Infor() {
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  /* radio */
  const [value, setValue] = useState(1);
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Row className="Row">
        <Col span={12}>
          <div className="tt">
            <b>
              <h1>Thông tin người đặt</h1>
            </b>
            <p style={{ fontSize: '20px', color: 'gray' }}>
              <i>Vui lòng điền đầy đủ thông tin</i>
            </p>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              style={{
                maxWidth: 500
              }}
              validateMessages={validateMessages}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '50px', marginTop: '20px' }}>Giới tính:</span>

                <Radio.Group
                  onChange={onChange}
                  value={value}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: '30px',
                    marginTop: '20px'
                  }}>
                  <Radio style={{ marginRight: '240px' }} value={1}>
                    Anh
                  </Radio>
                  <Radio value={2}>Chị</Radio>
                </Radio.Group>
              </div>
              <Form.Item
                name={['user', 'name']}
                label="Tên: "
                rules={[
                  {
                    required: true
                  }
                ]}
                style={{ marginTop: '20px' }}>
                <Input />
              </Form.Item>

              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                    required: true /* set bắt buộc điền*/
                  }
                ]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Điện thoại"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!'
                  }
                ]}>
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%'
                  }}
                />
              </Form.Item>

              <Form.Item name={['user', 'introduction']} label="Yêu cầu khác">
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  ...layout.wrapperCol,
                  offset: 0
                }}>
                <Button type="primary" htmlType="submit">
                  Thanh toán ngay
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>

        <Col span={12}>
          {' '}
          <div className="gia">
            <h3>Tên tour</h3>
            <Divider />
            <p>Content below the divider</p>
            <Divider />
            <p>Bạn có mã khuyến mãi?</p>
            <p>
              <u style={{ color: '#1890ff' }}>
                <a href=""> Chọn hoặc nhập mã khuyến mãi</a>
              </u>
            </p>
            <Divider />
            <p>Tổng cộng </p>
            <p>
              <i>Giá đã bao gồm thuế & phí.</i>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Infor;
