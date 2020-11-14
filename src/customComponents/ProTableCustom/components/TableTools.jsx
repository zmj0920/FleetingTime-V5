import { PureComponent, createRef } from 'react';

class TableTools extends PureComponent {


    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            createModalVisible: false,
            updateModalVisible: false,
            updateFormValues: null,
            selectedRows: [],
            selectedRowKeys: [],
        };
    }

    /**
     * table 工具栏，设为 false 时不显示
     */
    options = { fullScreen: true, reload: true, setting: true, search: true };

    /**
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

    /**
   * 新增弹框
   */
    onAdd = (visible) => {
        this.setState({ createModalVisible: visible });
    };

    /**
     * 修改表单弹窗
     * @param {} visible
     */
    onUpdate = (visible) => {
        this.setState({ updateModalVisible: visible });
    };

    /**
     * 头部显示内容配置
     */
    pageHeaderContent = () => null;

    /**
     * 显示头部扩展表单
     */
    renderCustomFormContent = () => null;

    /**
    * 表头
    */
    headerTitle = () => '高级表格';

}

export default TableTools