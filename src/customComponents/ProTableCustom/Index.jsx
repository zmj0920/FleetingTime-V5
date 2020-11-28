import React, { PureComponent, createRef, CSSProperties } from 'react';
import { PlusOutlined, MailOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Badge, Space, BackTop, Tag, message, Input, Descriptions, Menu } from 'antd';
import { LightFilter, ProFormDatePicker } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import TableTools from './components/TableTools'
import styles from './index.less'

class ProTableCustom extends TableTools {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state
    };
  }

  /**
  * Table action 的引用，便于自定义触发
  */
  actionRef = createRef();

  /**
   * 可以获取到查询表单的 form 实例，用于一些灵活的配置
   */
  formRef = createRef();

  /**
   * 自定义 table 的 alert
   * 设置或者返回false 即可关闭
   */
  tableAlertOptionRender = ({ selectedRowKeys, selectedRows, onCleanSelected }) => {
    return (
      <Space size={16}>
        {/* <a>导出数据</a> */}
        <a style={{ marginLeft: 8 }} onClick={onCleanSelected}>
          取消选择
        </a>
      </Space>
    );
  };

  /**
   * 表格数据配置
   */
  dataSource = [];

  /**
   * 对request 请求数据进行处理
   * @param {*} data
   */
  postFn = (data) => {
    let array = data;
    for (let index = 0; index < array.length; index++) {
      array[index].city = '郑州';
    }
    // console.log(array)
    return array;
  };


  /**
   * 搜索工具栏基础配置
   */
  tableSearchProps = {
    labelWidth: 120, //标签的宽度
    span: this.defaultColConfig, //搜索栏显示方式
    searchText: '搜索',
    resetText: '重置',
    defaultCollapsed: true,//设置面板默认值
  }

  /**
   * 搜索按钮菜单重写
   * @param {*} param0
   * @param {*} param1
   */
  optionRender = () => {
    return [
      <Button key="out">导出</Button>,
    ]
  }

  /**
   * 展开收起
   * @param {*} collapsed
   */
  onCollapse = (collapsed) => {
    this.setState({
      collapsedState: collapsed
    });
  }

  /**
   * 展开收起菜单
   * @param {*} collapsed
   * @param {*} _
   * @param {*} intl
   */
  collapseRender = (collapsed, _, intl) => {
    if (collapsed) {
      return (
        <>
          {intl.getMessage('tableForm.collapsed', '展开')}
          <DownOutlined
            style={{
              marginLeft: '0.5em',
              transition: '0.3s all',
              transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
            }}
          />
        </>
      );
    }
    return (
      <>
        {intl.getMessage('tableForm.expand', '收起')}
        <DownOutlined
          style={{
            marginLeft: '0.5em',
            transition: '0.3s all',
            transform: `rotate(${collapsed ? 0 : 0.5}turn)`,
          }}
        />
      </>
    );
  };

  /**
   * 搜索工具栏配置
   */
  tableSearch = () => {
    const { collapsedState, showCollapseRender } = this.props
    return {
      ...this.tableSearchProps,
      //搜索栏工具重写
      optionRender: ({ searchText, resetText }, { form }) => {
        return [
          <Button
            key="searchText"
            type="primary"
            onClick={() => {
              form?.submit();
            }}
          >
            {searchText}
          </Button>,
          <Button
            key="resetText"
            onClick={() => {
              form?.resetFields();
            }}
          >
            {resetText}
          </Button>,
          ...this.optionRender(),
        ]
      },
      collapsed: collapsedState,  //是否收起
      //  是否收起事件
      onCollapse: this.onCollapse,
      // 收起按钮配置
      collapseRender: this.collapseRender
    };
  }



  /**
   * 搜索表单数据获取antd form 的配置
   */
  form = {
    onValuesChange: (values, all) => {
      console.log(values, all);
    },
  };

  /**
   * 表格嵌套
   */
  expandedRowRender = () => {
    const data = [];
    for (let i = 0; i < 3; i += 1) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return (
      <ProTable
        columns={[
          {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: 'Upgrade Status',
            dataIndex: 'upgradeNum',
            key: 'upgradeNum',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            key: 'operation',
            valueType: 'option',
            render: () => [<a key="Pause">Pause</a>, <a key="Stop">Stop</a>],
          },
        ]}
        headerTitle={false}
        search={false}
        options={false}
        dataSource={data}
        pagination={false}
      />
    );
  };

  renderBadge = (count) => (
    <Badge
      count={count}
      style={{
        marginTop: -4,
        marginLeft: 4,
        color: '#999',
        backgroundColor: '#eee',
      }}
    />
  );

  /**
   * toolbar工具栏配置filter
   */
  toolbarFilter = () => {
    return (
      <LightFilter
        style={{
          marginTop: 8,
        }}
      >
        <ProFormDatePicker name="startdate" label="响应日期" />
      </LightFilter>
    )
  }

  /**
   * toolbar工具栏配置tabs配置
   */
  toolbarTabs = () => {
    return {
      onChange: (activeKey) => {
        console.log(activeKey)

      },
      activeKey: 'tab2',
      items: [
        {
          key: 'tab1',
          tab: '标签一',
        },
        {
          key: 'tab2',
          tab: '标签二',
        },
      ],
    }
  }

  /**
   * toolbar工具栏actions配置
   */
  toolbarActions = () => {
    return [
      <Button type="primary" key="newButton" onClick={() => this.onAdd(true)}>
        <PlusOutlined /> 新建
     </Button>,
    ]
  }

  /**
   * toolbar 菜单配置
   */
  toolbarMeun = () => {
    return {
      type: 'dropdown', //'inline' | 'dropdown'
      // activeKey: 'todo',
      onChange: (activeKey) => {
        this.activeKey = activeKey
        console.log(activeKey)
      },
      items: [
        {
          label: <span>全部应用{this.renderBadge(101)}</span>,
          key: 'all',
        },
        {
          label: <span>我创建的应用{this.renderBadge(3)}</span>,
          key: 'todo',
        },
      ],
    }
  }

  /**
   * 全局搜索事件
   * @param {*} keyWords
   */
  onSearchKeyWords = (keyWords) => {
    console.log(keyWords)
  }

  /**
   * toolbar 搜索显示配置
   */
  toolbarSearch = {
    loading: false,
    enterButton: '搜索',
    placeholder: "input search text",
    allowClear: true,
    style: { width: 300 },
    size: 'default'
  }

  /**
   * 自定义工具栏渲染
   */
  toolbar = () => {

    /**
     * showToolbarSearch 设置fales不显示
     * toolbarSubTitle 二级标题
     * toolbarTooltip 提示语
     * toolbarMultipleLine  multipleLine 是否换行
     */
    const { showToolbarSearch, toolbarTooltip, toolbarSubTitle, toolbarMultipleLine } = this.state

    return {
      title: this.headerTitle(),
      tooltip: toolbarTooltip,
      search: showToolbarSearch === false ? false : this.toolbarSearch,
      onSearch: (keyWords) => {
        this.onSearchKeyWords(keyWords)
      },
      subTitle: toolbarSubTitle,
      multipleLine: toolbarMultipleLine === false ? false : true,//控制是否换行显示
      filter: this.toolbarFilter(),
      tabs: this.toolbarTabs(),
      menu: this.toolbarMeun(),
      actions: this.toolbarActions(),
      // settings: [
      //   {
      //     icon: <SettingOutlined />,
      //     tooltip: '设置',
      //   },
      //   {
      //     icon: <FullscreenOutlined />,
      //     tooltip: '全屏',
      //   },
      // ],
    }
  }

  /**
   * 配置主题显示数据
   * @param {*} _
   * @param {*} data
   */
  tableExtraRender = (_, data) => {
    return null;
  };

  /**
   * 用于查询多余参数
   */
  params = {};

  /**
   * 渲染表格请求函数
   * @param {请求参数} params
   */
  getRequest = (params, sorter, filter) => {
    // return testData({ ...params })
  };

  /**
   * 自定义logo
   */
  pageHeaderLogo = () => null;

  /**
   * 批量操作
   */
  footerToolbar = () => {

    /**
     * selectedRowKeys 选key中值
     * selectedRows 选中 Row值
     */
    const { selectedRowKeys, selectedRows } = this.state;
    return (
      selectedRows?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowKeys.length}
              </a>{' '}
              项&nbsp;&nbsp;
              {/* <span>
                服务调用次数总计 {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
              </span> */}
            </div>
          }
        >
          <Button
            key="handleBatchDelete"
            onClick={() => {
              this.handleBatchDelete(selectedRowKeys, selectedRows);
            }}
          >
            批量删除
          </Button>
          <Button type="primary">批量审批</Button>
        </FooterToolbar>
      )
    );
  };

  /**
   * 表格主体自定义
   * @param {*} _
   * @param {*} dom
   */
  tableRender = (_, dom) => {
    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <Menu
          // onSelect={

          // }
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <Menu.SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.ItemGroup key="g1" title="Item 1">
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
        <div
          style={{
            width: '80%'
          }}
        >
          {dom}
        </div>
      </div>
    )
  }



  render() {

    /**
     * createModalVisible  新建弹窗表单 Visible
     * updateModalVisible  更新弹窗表单 Visible
     * updateFormValues    获取更新数据 values
     * selectedRows        表格多选行数据
     * selectedRowKeys     表格多选key值
     * pageName            设置头部显示标题
     * showSelect          设置是否开启多选 true时开启
     * showExpandedRowRender 嵌套表格state  showExpandedRowRender 配置true显示默认隐藏
     * dateFormatter  string 会格式化为 YYYY-DD-MM number 代表时间戳
     * showFooterToolbar 默认显示底部批量操作，设置false不显示
     * tableScroll  固定表格设置滚动条长度
     * rowKey        设置Key 值字段
     * showTableAlertRender 设置false不显示
     * showTableAlertOptionRender 选中显示  Alert 设置false不显示
     * showTableRender  表格主题显示扩展
     * manualRequest  是否需要手动触发首次请求, 配置为 true的时候手动发送请求
     * showSearch      是否显示表格搜索工具栏false不显示
     * showPageContainer 是否显示头部header 设置 false不显示
     */
    const {
      createModalVisible,
      updateModalVisible,
      updateFormValues,
      selectedRowKeys,
      pageName,
      showSelect,
      showExpandedRowRender,
      dateFormatter,
      showFooterToolbar,
      tableScroll,
      rowKey,
      showTableAlertRender,
      showTableRender,
      manualRequest,
      showSearch,
      showPageContainer
    } = this.state;

    /**
     * 扩展配置
     */
    const standardTableCustomOption = {
      scroll: tableScroll,
      pagination: this.pagination,
      search: showSearch === false ? false : this.tableSearch(),
      options: this.options,
      postData: this.postFn,
      // dataSource: this.dataSource,
      dateFormatter: dateFormatter ? dateFormatter : 'string',
      tableAlertRender: showTableAlertRender === false ? false : () => { },
      tableAlertOptionRender: this.tableAlertOptionRender,
      beforeSearchSubmit: this.beforeSearchSubmit,
      form: this.form,
      onReset: this.resetFn,
      toolbar: this.toolbar(),
      tableExtraRender: this.tableExtraRender,
      params: this.params,
      onRequestError: this.onRequestError,
      manualRequest: manualRequest === true ? true : false,
      columns: this.getColumn(),
      request: (params, sorter, filter) => this.getRequest(params, sorter, filter),
      rowKey: rowKey || 'key',
      headerTitle: this.headerTitle(),
      rowSelection: showSelect === true ? { selectedRowKeys, onChange: this.handleSelectRows, } : false,
      expandable: showExpandedRowRender === true ? { expandedRowRender: this.expandedRowRender, } : false,
      actionRef: this.actionRef,
      formRef: this.formRef,
      tableRender: showTableRender === true ? this.tableRender : false,
      onSizeChange: (size) => { console.log(size) },
      editable: {
        type: 'singe',
        onSave: (key, row) => {
          this.onRowEditSave(key, row);
        },
        onDelete: (key, row) => {
          this.onDelete(key, row);
        },
        onChange: (editableKeys, editableRows) => {
          this.onChangeRowEdit(editableKeys, editableRows);
        },
        deletePopconfirmMessage: '删除吗？',
        // actionRender: (row, config) => {
        //   const { recordKey, isNewLine, cancelEditable, onSave, form } = config;
        //   return [
        //     <a
        //       key="save"
        //       onClick={async () => {
        //         const fields = form.getFieldValue([recordKey]);
        //         await onSave?.(recordKey, { ...row, ...fields });
        //         form.resetFields([recordKey]);
        //       }}
        //     >
        //       保存
        //   </a>,
        //     <a onClick={
        //       () => {
        //         cancelEditable(recordKey)
        //       }
        //     }>
        //       取消
        //   </a>,
        //   ]
        // }
      },
    };

    const getColumn = this.getColumn()
    if (showPageContainer === false) {
      return (
        <>
          {this.renderCustomFormContent()}
          {
            getColumn.length > 0 ? (
              <ProTable
                {...standardTableCustomOption}
              />
            ) : null
          }
          <CreateForm
            onCancel={() => this.onAdd(false)}
            modalVisible={createModalVisible}
            modalTitle={'新建表单'}
          >
            <ProTable
              onSubmit={(value) => {
                this.handleAdd(value);
              }}
              rowKey="key"
              type="form"
              columns={this.getColumn()}
            />
          </CreateForm>
          {showFooterToolbar === false ? null : this.footerToolbar()}
          {updateFormValues && Object.keys(updateFormValues).length ? (
            <UpdateForm
              onCancel={() => {
                this.onUpdate(false);
                this.setUpdateFormValues([]);
              }}
              modalTitle={'修改表单'}
              updateModalVisible={updateModalVisible}
            >
              <ProTable
                onSubmit={(value) => {
                  this.handleUpdate(value);
                }}
                rowKey="key"
                type="form"
                values={updateFormValues}
                columns={this.getColumn()}
              />
            </UpdateForm>
          ) : null}
          <BackTop />
        </>
      );
    }
    return (
      <>
        <PageContainer
          title={pageName}
          avatar={this.pageHeaderLogo() ? { src: this.pageHeaderLogo() } : false}
          content={this.pageHeaderContent()}
        >
          {this.renderCustomFormContent()}
          {
            getColumn.length > 0 ? (
              <ProTable
                {...standardTableCustomOption}
              />
            ) : null
          }
          <CreateForm
            onCancel={() => this.onAdd(false)}
            modalVisible={createModalVisible}
            modalTitle={'新建表单'}
          >
            <ProTable
              onSubmit={(value) => {
                this.handleAdd(value);
              }}
              rowKey="key"
              type="form"
              columns={this.getColumn()}
            />
          </CreateForm>
          {showFooterToolbar === false ? null : this.footerToolbar()}
          {updateFormValues && Object.keys(updateFormValues).length ? (
            <UpdateForm
              onCancel={() => {
                this.onUpdate(false);
                this.setUpdateFormValues([]);
              }}
              modalTitle={'修改表单'}
              updateModalVisible={updateModalVisible}
            >
              <ProTable
                onSubmit={(value) => {
                  this.handleUpdate(value);
                }}
                rowKey="key"
                type="form"
                values={updateFormValues}
                columns={this.getColumn()}
              />
            </UpdateForm>
          ) : null}
          <BackTop />
        </PageContainer>
      </>
    );
  }
}

export default ProTableCustom;
