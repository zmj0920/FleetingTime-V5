import { PureComponent, createRef } from 'react';

class TableTools extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,

      /**
       * 新建弹窗表单Visible
       */
      createModalVisible: false,

      /**
       * 更新弹窗表单 Visible
       */
      updateModalVisible: false,

      /**
       * 获取更新数据 values
       */
      updateFormValues: null,

      /**
       * 表格多选行数据
       */
      selectedRows: [],

      /**
       * 表格多选key值
       */
      selectedRowKeys: [],
    };
  }

  /*
   * 默认的操作栏配置，设为 false 时不显示
   */
  options = { fullScreen: true, reload: true, setting: true };

  /*
   * 不同屏幕显示方式
   */
  defaultColConfig = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
    xxl: 6,
  };

  /*
  * 新增弹框
  */
  onAdd = (visible) => {
    this.setState({ createModalVisible: visible });
  };

  /*
   * 修改表单弹窗
   * @param {} visible
   */
  onUpdate = (visible) => {
    this.setState({ updateModalVisible: visible });
  };

  /*
   * 头部显示内容配置
   */
  pageHeaderContent = () => null;

  /*
   * 显示头部扩展表单
   */
  renderCustomFormContent = () => null;

  /*
  * 左上角的 title
  */
  headerTitle = () => null;

  /*
   * 数据加载失败
   */
  onRequestError = (error) => { };

  /*
   * 格式化搜索表单提交数据
   * @param {搜索参数} params
   */
  beforeSearchSubmit = (params) => {
    // console.log(params)
    return params;
  };

  /**
   * 分页配置 false 不显示分页
   */
  pagination = {
    showQuickJumper: false, //是否显示跳转页
    pageSize: 10, //配置默认显示数据条数
  };

  /**
   * 加载更多
   */
  fetchMore = () => {
    if (this.actionRef.current) {
      this.actionRef.current.fetchMore();
    }
  };

  /**
   * 刷新数据
   */
  reloadData = () => {
    if (this.actionRef.current) {
      this.actionRef.current.reload();
    }
  };

  /**
   * 重置到默认状态
   */
  fromReset = () => {
    if (this.actionRef.current) {
      this.actionRef.current.reset();
    }
  };

  /**
   * 重置表单事件
   */
  resetFn = () => {
    console.log('重置表单');
  };

  /**
   * 清空选中项
   */
  clearSelected = () => {
    if (this.actionRef.current) {
      this.actionRef.current.clearSelected();
    }
  };

  /**
   * 批量操作选择
   * @param {选择key*} selectedRowKeys
   * @param {选择的行数据*} selectedRows
   */
  handleSelectRows = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys);

    this.setState({
      selectedRows: selectedRows,
      selectedRowKeys,
    });
  };

  /**
   * 清空选择数据
   */
  cleanSelectedRows = () => {
    this.setState({ selectedRows: [] });
  };

  /**
   * 重写表格列表配置
   */
  getColumn = () => [];

  /**
   * 表单提交
   * @param {*} value
   */
  handleAdd = (value) => { };

  /**
   * 修改表单提交
   * @param {修改表单提交} value
   */
  handleUpdate = (value) => { };

  /**
   * 修改方法获取数据更新
   * @param {*} record
   */
  setUpdateFormValues = (record) => {
    this.setState({
      updateFormValues: record,
    });
  };

  /**
   * 批量删除
   * @param {*} selectedRowKeys
   * @param {*} selectedRows
   */
  handleBatchDelete = (selectedRowKeys, selectedRows) => {
    console.log(selectedRowKeys);
    this.cleanSelectedRows();
    this.actionRef.current?.reloadAndRest?.();
  };

  /**
    * 单行删除
    * @param {rowKey} key
    * @param {行数据} row
    */
  onDelete = (key, row) => {
  }

  /**
   * 行内编辑保存
   * @param {rowKey} key
   * @param {修改后的行数据} row
   */
  onRowEditSave = (key, row) => {
  }

  /**
   * 行内编辑数据发生改变触发
   * @param {rowKey} editableKeys
   * @param {行内编辑数据} editableRows
   */
  onChangeRowEdit = (editableKeys, editableRows) => {

  }

}

export default TableTools
