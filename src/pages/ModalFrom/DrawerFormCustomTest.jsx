import React, { Component, createRef } from 'react';
import { Row, Col, Divider, Form, Input, Icon, Button } from 'antd';
import DrawerFormCustom from '@/customComponents/CustomForm/DrawerFormCustom/Index';
import moment from 'moment';
import ProForm, { ProFormText, ProFormDateRangePicker, ProFormSelect } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';


class DrawerFormCustomTest extends DrawerFormCustom {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      ...{
        dataLoading: false,
        pageName: '123',
      },
    };
  }

  handleAdd = (value) => {
    console.log(value);
    if (value) {
      this.reloadData();
    }
  };

  trigger = () => {
    return (
      <Button type="primary">
        <PlusOutlined />
        DrawerForm
      </Button>
    );
  };

  formContent = () => {
    return (
      <>
        <ProForm.Group title="基本信息">
          <ProFormText
            name="name"
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
          />
          <ProFormText name="company" label="我方公司名称" placeholder="请输入名称" />
          <ProFormText name="contract1" label="合同名称" placeholder="请输入名称" />
          <ProFormDateRangePicker
            name="contractTime"
            label="合同生效时间"
            initialValue={[moment('2020-10-28 08:55:54'), moment('2020-10-28 08:55:54')]}
          />
        </ProForm.Group>
        <ProForm.Group title="必填信息">
          <ProFormText name="contract1" label="合同名称" placeholder="请输入名称" />
          <ProFormDateRangePicker name="contractTime1" label="合同生效时间" />
        </ProForm.Group>
        <ProForm.Group title="选填信息">
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
            ]}
            width="xs"
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormSelect
            width="xs"
            options={[
              {
                value: 'time',
                label: '履行完终止',
              },
            ]}
            name="unusedMode"
            label="合同约定失效效方式"
          />
          <ProFormSelect
            name="select"
            label="Select"
            hasFeedback
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            placeholder="Please select a country"
            rules={[{ required: true, message: 'Please select your country!' }]}
          />
        </ProForm.Group>
        <ProForm.Group title="选填信息">
          <ProFormSelect
            key="employees_num"
            fieldKey="employees_num"
            name="employees_num"
            label="人数"
            request={async () => [
              { value: '1-3人', label: '1-3人' },
              { value: '4-6人', label: '4-6人' },
              { value: '7-10人', label: '7-10人' },
            ]}
          />

          <ProFormSelect
            key="production_process"
            fieldKey="production_process"
            name="production_process"
            label="区域"
            request={async () => [
              { value: '全国', label: '全国' },
              { value: '江苏', label: '江苏' },
              { value: '浙江', label: '浙江' },
            ]}
          />
        </ProForm.Group>
        <ProForm.Group title="项目信息">
          <ProFormText width="s" name="id" label="主合同编号" />
          <ProFormText name="project" disabled label="项目名称" initialValue="xxxx项目" />
          <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
        </ProForm.Group>
      </>
    );
  };
}

export default DrawerFormCustomTest;
