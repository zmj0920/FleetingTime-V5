import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col
} from 'antd';

const FormSizeDemo = () => {
  return (
    <>
      <Form>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={6} sm={24}>
            <Form.Item label="Input11111111111112222222222">
              <Input />
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
                <Select.Option value="demo1">Demo1</Select.Option>
                <Select.Option value="demo2">Demo2</Select.Option>
                <Select.Option value="demo3">Demo3</Select.Option>
                <Select.Option value="demo4">Demo4</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="TreeSelect">
              <TreeSelect
                treeData={[
                  {
                    title: 'Light',
                    value: 'light',
                    children: [
                      {
                        title: 'Bamboo',
                        value: 'bamboo',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="Cascader">
              <Cascader
                options={[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                      },
                    ],
                  },
                ]}
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="DatePicker">
              <DatePicker />
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="InputNumber">
              <InputNumber />
            </Form.Item>
          </Col>
          <Col md={6} sm={24}>
            <Form.Item label="Switch">
              <Switch />
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item> */}
      </Form>
    </>
  );
};

export default FormSizeDemo