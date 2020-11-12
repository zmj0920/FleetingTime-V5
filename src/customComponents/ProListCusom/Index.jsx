import { PureComponent, createRef } from 'react';
import React from 'react';
import { Button, Tag, Space } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import ProList from '@ant-design/pro-list';



class ProListCusom extends PureComponent {

    constructor(props) {
        super(props);
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
    toolBarRender = () => [
        <Button key="3" type="primary">
            新建
        </Button>,
    ]

    render() {

        return (
            <>
                <PageContainer
                    title={pageName}
                //   avatar={{ src: this.pageHeaderLogo() }}
                //   content={this.pageHeaderContent()}
                >
                    <ProList
                        toolBarRender={this.toolBarRender}
                        rowKey="name"
                        headerTitle="基础列表"
                        dataSource={this.dataSource}
                        showActions="hover"
                        metas={this.metas}
                    />
                    <BackTop />
                </PageContainer>
            </>
        );
    }
}

export default ProListCusom;
