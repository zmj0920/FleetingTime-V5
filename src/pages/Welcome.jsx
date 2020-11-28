import React from 'react'
import ProTable from '@ant-design/pro-table';
import { testData } from '@/services/account';

class ProTableDemo extends React.Component {

  getColumn = () => [
    {
      title: '编号',
      dataIndex: 'id',
      width: 60,
      valueType: 'indexBorder'
    },
    {
      title: '标题',
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
      valueType: 'checkbox', //多选
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      }
    },
    {
      title: '上次调度时间',
      dataIndex: 'updatedAt',
      align: 'center',
      width: 100,
      sorter: true,
      valueType: 'dateTime',
      sorter: (a, b) => a.createdAt - b.createdAt,
      hideInForm: false,
    }
  ];

  getRequest = (params, sorter, filter) => {
    let paramsData = Object.assign(params, sorter, filter)
    return testData({ ...paramsData });
  };

  render() {
    return (
      <ProTable
        columns={this.getColumn()}
        request={(params, sorter, filter) => this.getRequest(params, sorter, filter)}
      />
    )
  }

}

export default ProTableDemo
