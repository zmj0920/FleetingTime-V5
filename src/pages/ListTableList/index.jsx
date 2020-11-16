import React from 'react';
import {
  Divider,
  Button,
  Popconfirm,
  Space,
  Descriptions,
} from 'antd';
import { SettingOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import ProTableCustom from '@/customComponents/ProTableCustom/Index';
import LightFilterCustom from '@/customComponents/CustomForm/LightFilterCustom/LightFilterCustom'
import { testData } from '@/services/account';
import request from 'umi-request';
import moment from 'moment';
import style from '@/pages/Welcome.less';
import ProCard from '@ant-design/pro-card';
import {
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormSwitch,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormTimePicker,
  ProFormSlider,
} from '@ant-design/pro-form';

class Index extends ProTableCustom {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      ...{
        dataLoading: false,
        showSelect: true,
        // showExpandedRowRender:true,
        tableScroll: { x: 1300 },
        showFooterToolbar: false,
        dateFormatter: false,
        showTableAlertOptionRender: false,
        // showTableRender:true,
        // showToolbarSearch: false
        // dateFormatter: 'number'
        // manualRequest: true,
        // collapsedState: false,
        showCollapseRender: false
      },
    };
  }

  handleAdd = (value) => {
    console.log(this.formRef);
    this.formRef.current.setFieldsValue({
      id: 'test-xxx',
    });
    if (value) {
      this.reloadData();
    }
  };

  handleUpdate = (value) => {
    console.log(value)
  }
  handleDelete = (value) => {
    console.log(value)
  };

  getRequest = (params, sorter, filter) => {
    let paramsData = Object.assign(params, sorter, filter)
    return testData({ ...paramsData });
  };

  tableExtraRender = (_, data) => {
    return (
      <>
        <ProCard>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Row">{data.length}</Descriptions.Item>
            <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
            <Descriptions.Item label="Association">
            </Descriptions.Item>
            <Descriptions.Item label="Creation Time">2017-01-10</Descriptions.Item>
            <Descriptions.Item label="Effective Time">2017-10-10</Descriptions.Item>
          </Descriptions>
        </ProCard>
      </>
    );
  };

  params = { age: 20 };

  getColumn = () => [
    {
      title: '编号',
      dataIndex: 'id',
      width: 60,
      align: 'center',
      hideInForm: true,
      // search:false,
      children: [
        {
          title: '金额',
          dataIndex: 'money',
          width: 60,
          valueType: 'money',
        },
        {
          title: '姓名',
          width: 60,
          dataIndex: 'name',
          valueType: 'text',
        },
      ],
    },
    {
      title: '城市',
      dataIndex: 'city',
      width: 60,
      align: 'center',
      hideInForm: true,
    },
    {
      title: '描述',
      dataIndex: 'desc',
      width: 80,
      align: 'center',
      copyable: true, //是否支持复制
      ellipsis: true, //是否自动缩略
      tooltip: '会在 title 之后展示一个 icon，hover 之后提示一些信息',
    },
    {
      title: '时间区间',
      key: 'dateTimeRange',
      width: 100,
      align: 'center',
      dataIndex: 'createdAtRange',
      valueType: 'dateTimeRange',
      fieldProps: {
        className: `${style.pre}`,
      },
      search: {
        transform: (value) => ({
          startTime: value[0],
          endTime: value[1],
        }),
      },
    },
    {
      title: '服务调用次数',
      dataIndex: 'callNo',
      width: 100,
      align: 'center',
      sorter: true,
      hideInForm: true,
      renderText: (val) => `${val} 万`,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      align: 'center',
      filters: true,
      hideInForm: true,
      initialValue: ['1', '2'],
      // initialValue: 0, //多选
      //  valueType: 'select', // 表单类型和request一起使用
      // valueType: 'radio', //单选状态
      // valueType: 'radioButton', //单选按钮状态
      valueType: 'checkbox', //多选
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },
      // request: async () => [
      //   {
      //     label: '全部',
      //     value: '0',
      //     status: 'Default',
      //   },
      //   {
      //     label: '未解决',
      //     value: '1',
      //     status: 'Error',
      //   },
      //   {
      //     label: '已解决',
      //     value: '2',
      //     status: 'Success',
      //   },
      //   {
      //     label: '已上线',
      //     value: '3',
      //     status: 'Success',
      //   },
      //   {
      //     label: '解决中',
      //     value: '4',
      //     status: 'Processing',
      //   },
      // ],
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      align: 'center',
      width: 100,
      sorter: true,
      valueType: 'dateTime',
      sorter: (a, b) => a.createdAt - b.createdAt,
      // valueType: 'fromNow',
      hideInForm: false,

    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      width: 80,
      align: 'center',
      fixed: 'right',
      // fixed: 'left',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              this.onUpdate(true);
              this.setUpdateFormValues(record);
            }}
          >
            配置
          </a>
          <Divider type="vertical" />
          <Popconfirm
            placement="top"
            title="确定要删除吗？"
            onConfirm={() => this.handleDelete(record)}
            okText="确定"
            cancelText="取消"
          >
            <a>删除</a>
          </Popconfirm>
          <Divider type="vertical" />
          {/* <a
            onClick={() => {
              this.testData(record)
            }}
          >
            清空选中
          </a> */}
          <Divider type="vertical" />
        </>
      ),
    },
  ];

  onLightFilterFinish = (value) => {
    console.log(value)
  }

  /**
 * 表单内容
 */
  lightFilterFrom = () => {
    return (
      <>
        <ProFormSelect
          name="sex"
          label="性别"
          showSearch
          valueEnum={{
            man: '男',
            woman: '女',
          }}
        />
        <ProFormSelect
          name="area"
          label="地区"
          mode="multiple"
          valueEnum={{
            beijing: '北京',
            shanghai: '上海',
            hangzhou: '杭州',
            long: '这是一个很长的用来测试溢出的项目',
          }}
        />
        <ProFormDigit name="count" label="数量" />
        <ProFormSlider name="range" label="范围" range />
        <ProFormText name="name1" label="名称" />
        <ProFormSwitch name="open" label="开关" />
        <ProFormText name="name2" label="地址" />
        <ProFormDatePicker name="name3" label="日期" />
        <ProFormDateRangePicker name="date" label="日期范围" />
        <ProFormDateTimePicker name="datetime" label="日期时间" />
        <ProFormTimePicker name="time" label="时间" />
      </>
    );
  };

  collapseLabel = () => {
    return (<>更多筛选 <DownOutlined /></>)
  }
  
  headerTitle = () => {
    return (
      <Space>
        {/* <LightFilterCustom
          lightFilterFrom={this.lightFilterFrom()}
          // collapseLabel={this.collapseLabel}
          onLightFilterFinish={this.onLightFilterFinish}
        /> */}
      </Space>
    );
  };
}

export default Index;
