import React, { PureComponent } from 'react';
import { Button, Tag, Space, Progress } from 'antd';
import ProList from '@ant-design/pro-list';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import request from 'umi-request';

class ProListCusom extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      expandedRowKeys: null,
      selectedRowKeys: []
    };
  }

  // dataSource = [
  //   {
  //     name: '语雀的天空',
  //     image:
  //       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  //     desc: '我是一条测试的描述',
  //   },
  //   {
  //     name: 'Ant Design',
  //     image:
  //       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  //     desc: '我是一条测试的描述',
  //   },
  //   {
  //     name: '蚂蚁金服体验科技',
  //     image:
  //       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  //     desc: '我是一条测试的描述',
  //   },
  //   {
  //     name: 'TechUI',
  //     image:
  //       'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  //     desc: '我是一条测试的描述',
  //   },
  // ];

  /**
 * 自定义logo
 */
  pageHeaderLogo = () => 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4';

  /**
    * 头部显示内容配置
    */
  pageHeaderContent = () => null;

  /**
 * 自定义批量操作工具栏左侧信息区域, false 时不显示
 */
  toolBarRender = () => {
    return [
      <Button type="primary" key="newButton" onClick={() => this.onAdd(true)}>
        <PlusOutlined /> 新建
      </Button>,
    ];
  };

  /**
 * 表头
 */
  headerTitle = () => '高级表格';

  showActions = "hover"

  metas = {
    title: {
      dataIndex: ['id'],
      title: '用户',
    },
    state: {
      dataIndex: ['state'],
      search: false,
    },
    avatar: {
      dataIndex: ['avatar_url'],
      search: false,
      render: () => (
        <img
          width={25}
          height={25}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
        />
      ),
    },

    status: {
      // 自己扩展的字段，主要用于筛选，不在列表中显示
      title: '状态',
      valueType: 'select',
      valueEnum: {
        all: {
          text: '全部',
          status: 'Default',
        },
        open: {
          text: '未解决',
          status: 'Error',
        },
        closed: {
          text: '已解决',
          status: 'Success',
        },
        processing: {
          text: '解决中',
          status: 'Processing',
        },
      },
    },
    description: {
      dataIndex: 'title',
      search: false,
    },
    subTitle: {
      dataIndex: 'labels',
      render: (_, row) => (
        <Space size={0}>
          {row.labels?.map(label => (
            <>
            <Tag color="blue">{label.name}</Tag>
            </>
          ))}
           <Tag color="red">{row.created_at}</Tag>
        </Space>
      ),
      search: false,
    },
    extra: {
      render: () => (
        <img
          width={50}
          height={50}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      ),
    },
    content: {
      search: false,
      render: () => (
        <div
          style={{
            minWidth: 200,
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <div
            style={{
              width: '200px',
            }}
          >
            <div>发布中</div>
            <Progress percent={80} />
          </div>
        </div>
      ),
    },
    actions: {
      search: false,
      render: (text, row) => [
        <a href={row.url} target="_blank" rel="noopener noreferrer" key="link">
          链路
        </a>,
        <a href={row.url} target="_blank" rel="noopener noreferrer" key="warning">
          报警
        </a>,
        <a href={row.url} target="_blank" rel="noopener noreferrer" key="view">
          查看
        </a>,
      ],
    },
  }

  setExpandedRowKeys = (expandedRows) => {
    console.log(expandedRows)
  }

  handleSelectRows = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys);

    this.setState({
      selectedRows: selectedRows,
      selectedRowKeys,
    });
  };

  render() {
    const { pageName, rowKey, expandedRowKeys, selectedRowKeys } = this.state

    const rowSelection = {
      selectedRowKeys,
      onChange: this.handleSelectRows,
    };

    return (
      <PageContainer
        title={pageName}
        itemLayout="vertical"
        avatar={{ src: this.pageHeaderLogo() }}
        content={this.pageHeaderContent()}
      >
        <ProList
          toolBarRender={this.toolBarRender}
          rowKey={rowKey || 'key'}
          headerTitle={this.headerTitle()}
          // dataSource={this.dataSource}
          pagination={{
            pageSize: 5,
          }}
          request={async (params = {}) =>
            request('https://proapi.azurewebsites.net/github/issues', {
              params,
            })
          }
          showActions={this.showActions}
          metas={this.metas}

          search={{
            filterType: 'light',
          }}
          expandable={{
            expandedRowKeys,
            defaultExpandAllRows: false,
            onExpandedRowsChange: this.setExpandedRowKeys,
          }}
          rowSelection={rowSelection}
        />
      </PageContainer>
    )
  }
}
export default ProListCusom;