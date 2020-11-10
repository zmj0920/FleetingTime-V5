import React, { Component, createRef } from 'react';
import { Row, Col, Divider, Form, Input, Icon, Button } from 'antd';
import StepsFormCustom from '@/customComponents/CustomForm/StepsFormCustom';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
import ProForm, {
  StepsForm,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormTextArea,
  ProFormCheckbox,
  ProFormDateRangePicker,
} from '@ant-design/pro-form';
import style from './Welcome.less';

const waitTime = (time = 100) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });

@connect(({ user, global, loading }) => ({
  global,
  user,
  loading: loading.models.user,
}))
class Welcome extends StepsFormCustom {
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

  getApiData = (props) => {
    const {
      user: { data },
    } = props;

    return data;
  };

  handleAdd = (value) => {
    console.log(value);
    if (value) {
      this.reloadData();
    }
  };

  formContent = () => {
    return (
      <>
        <StepsForm.StepForm
          name="base"
          title="创建实验"
          onFinish={async () => {
            await waitTime(2000);
            return true;
          }}
        >
          <ProFormText
            name="name1"
            label="实验名称"
            tooltip="最长为 24 位，用于标定的唯一 id"
            placeholder="请输入名称"
            rules={[{ required: true }]}
          />
          <ProFormDatePicker name="date1" label="日期" />
          <ProFormDateRangePicker name="dateTime1" label="时间区间" />
          <ProFormTextArea name="remark3" label="备注" width="l" placeholder="请输入备注" />
        </StepsForm.StepForm>
        <StepsForm.StepForm name="checkbox" title="设置参数">
          <ProFormCheckbox.Group
            name="checkboxType"
            label="迁移类型"
            width="l"
            options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
          />
          <ProForm.Group>
            <ProFormText name="dbname1" label="业务 DB 用户名" />
            <ProFormDatePicker name="datetimes" label="记录保存时间" width="s" />
          </ProForm.Group>
        </StepsForm.StepForm>
        <StepsForm.StepForm name="time" title="发布实验">
          <ProFormCheckbox.Group
            name="checkbox"
            label="部署单元"
            rules={[
              {
                required: true,
              },
            ]}
            options={['部署单元1', '部署单元2', '部署单元3']}
          />
          <ProFormSelect
            label="部署分组策略"
            name="remark"
            rules={[
              {
                required: true,
              },
            ]}
            initialValue="1"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
          <ProFormSelect
            label="Pod 调度策略"
            name="remark2"
            initialValue="2"
            options={[
              {
                value: '1',
                label: '策略一',
              },
              { value: '2', label: '策略二' },
            ]}
          />
        </StepsForm.StepForm>
      </>
    );
  };
}

export default Welcome;
