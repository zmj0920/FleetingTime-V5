import React, { PureComponent } from 'react';
import { Button, Tag, Space } from 'antd';
import ProList from '@ant-design/pro-list';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';


class ProListCusom extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  dataSource = [
    {
      name: '语雀的天空',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
    },
    {
      name: 'Ant Design',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
    },
    {
      name: '蚂蚁金服体验科技',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
    },
    {
      name: 'TechUI',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '我是一条测试的描述',
    },
  ];

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
      dataIndex: 'name',
    },
    avatar: {
      dataIndex: 'image',
    },
    description: {
      dataIndex: 'desc',
    },
    subTitle: {
      render: () => (
        <Space size={0}>
          <Tag color="blue">Ant Design</Tag>
          <Tag color="#5BD8A6">TechUI</Tag>
        </Space>
      ),
    },
    actions: {
      render: (text, row) => [
        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="link">
          链路
    </a>,
        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="warning">
          报警
    </a>,
        <a href={row.html_url} target="_blank" rel="noopener noreferrer" key="view">
          查看
    </a>,
      ],
    },
  }

  render() {
    const { pageName, rowKey } = this.state
    return (
      <PageContainer
        title={pageName}
        avatar={{ src: this.pageHeaderLogo() }}
        content={this.pageHeaderContent()}
      >
        <ProList
          toolBarRender={this.toolBarRender}
          rowKey={rowKey || 'key'}
          headerTitle={this.headerTitle()}
          dataSource={this.dataSource}
          showActions={this.showActions}
          metas={this.metas}
        />
      </PageContainer>
    )
  }
}
export default ProListCusom;