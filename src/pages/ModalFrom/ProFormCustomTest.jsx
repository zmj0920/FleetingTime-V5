import React, { Component, createRef } from 'react';
import { Row, Col, Divider, Form, Input, Icon, Button, } from 'antd';
import ProFormCustom from '@/customComponents/CustomForm/ProFormCustom/Index';
import moment from 'moment';
import { SmileOutlined, MailTwoTone } from '@ant-design/icons'
import { request } from 'umi-request'
import ProForm, {
  ProFormText,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormSelect,
  ProFormUploadButton,
  ProFormUploadDragger,
  ProFormDatePicker,
  ProFormSwitch,
  ProFormRadio,
  ProFormCheckbox,
  ProFormRate,
  ProFormDigit,
  ProFormSlider,
  ProFormTimePicker,
  ProFormTextArea,
  ProFormField,
  ProFormCaptcha,
  ProFormFieldSet
} from '@ant-design/pro-form';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
class ProFormCustomTest extends ProFormCustom {
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
    // if (value) {
    //   this.resetFn();
    // }
    this.resetFields()
  };

  formContent = () => {
    return (
      <>
        <ProForm.Group title="基础组件">
          <ProFormField>验证码：</ProFormField>
          <ProFormCaptcha
            fieldProps={{
              // size: 'large',
              prefix: <MailTwoTone />,
            }}
            captchaProps={{
              // size: 'large',
            }}
            name="captcha"
            // rules={[
            //   {
            //     required: true,
            //     message: '请输入验证码！',
            //   },
            // ]}
            placeholder="请输入验证码"
            onGetCaptcha={async () => {
              await waitTime(1000);
              message.success('验证码发送成功!');
            }}
          />
          <ProFormField>姓名：</ProFormField>
          <ProFormText width="m" name="name" />
          <ProFormField>下拉框：</ProFormField>
          <ProFormSelect
            name="select"
            width="xs"
            // label="Select"
            hasFeedback
            valueEnum={{
              china: 'China',
              usa: 'U.S.A',
            }}
            placeholder="Please select a country"
            // rules={[{ required: true, message: 'Please select your country!' }]}
          />
          <ProFormField>合同约定生效方式：</ProFormField>
          <ProFormSelect
            name="select1"
            width="xs"
            hasFeedback
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
            ]}
            placeholder="Please select a country"
            // rules={[{ required: true, message: 'Please select your country!' }]}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            name="select-multiple"
            label="Select[multiple]"
            hasFeedback
            valueEnum={{
              red: 'Red',
              green: 'Green',
              blue: 'Blue',
            }}
            fieldProps={{
              mode: 'multiple',
            }}
            placeholder="Please select favorite colors"
            // rules={[{ required: true, message: 'Please select your favorite colors!', type: 'array' }]}
          />
          <ProFormDigit label="InputNumber" name="input-number" min={1} max={10} />
          <ProFormSwitch
            name="switch"
            label="Switch"
            unCheckedChildren="不同意"
            checkedChildren="同意"
          />
          <ProFormSlider
            name="slider"
            label="Slider"
            width="m"
            marks={{
              0: 'A',
              20: 'B',
              40: 'C',
              60: 'D',
              80: 'E',
              100: 'F',
            }}
          />
          <ProFormTextArea name="remark" label="备注" width="l" placeholder="请输入备注" />
          <ProFormRadio.Group
            name="radio"
            label="Radio.Group"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
        </ProForm.Group>

        <ProForm.Group>


          <ProFormRadio.Group
            name="radio-button"
            label="Radio.Button"
            radioType="button"
            options={[
              {
                label: 'item 1',
                value: 'a',
              },
              {
                label: 'item 2',
                value: 'b',
              },
              {
                label: 'item 3',
                value: 'c',
              },
            ]}
          />
          <ProFormCheckbox.Group
            name="checkbox-group"

            label="Checkbox.Group"
            options={['A', 'B', 'C', 'D', 'E', 'F']}
          />
          <ProFormRate name="rate" label="Rate" />
          <ProFormUploadButton
            name="upload"
            label="Upload"
            max={2}
            action="/upload.do"
            extra="longgggggggggggggggggggggggggggggggggg"
          />
          <ProFormUploadDragger width="l" max={4} label="Dragger" name="dragger" />
        </ProForm.Group>
        <ProForm.Group title="日期相关分组">
          <ProFormTimePicker name="time" label="时间" />
          <ProFormDatePicker name="date" label="日期" />
          <ProFormDatePicker.Week name="dateWeek" label="周" />
          <ProFormDatePicker.Month name="dateMonth" label="月" />
          <ProFormDatePicker.Quarter name="dateQuarter" label="季度" />
          <ProFormDatePicker.Year name="dateYear" label="年" />
          <ProFormDateTimePicker name="dateTime" label="日期时间" />
          <ProFormDateRangePicker name="dateRange" label="日期区间" />
          <ProFormDateTimeRangePicker name="dateTimeRange" label="日期时间区间" />
        </ProForm.Group>
        <ProFormFieldSet
          name="list"
          label="组件列表"
          transform={(value) => ({ startValue: value[0], twoValue: value[1] ,endValue: value[2]})}
        >
          <ProFormText width="m" />
          <ProFormText width="m" />
          <ProFormText width="m" />
        </ProFormFieldSet>
      </>
    );
  };
}

export default ProFormCustomTest;
