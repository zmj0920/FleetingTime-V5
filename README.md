


###  extends ProTableCustom 表格使用

```js



```















### getColumn 列定义

```js
   getColumn = () => [
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      align: 'center',

      /**
      * 在新建表单中删除
      */
      hideInForm: true,

      /**
       * 在查询表格中不展示此项
       */
      hideInTable: true,

      /**
       * 在查询表单中隐藏
       */
      search: false,

      /**
       * search 转化值的key, 一般用于事件区间的转化
       */
      search: {
        transform: (value) => ({
          startTime: value[0],
          endTime: value[1],
        }),
      },

      /**
       * 表头的筛选菜单项
       */
      filters: true,

      /**
       * 搜索表单的默认值 或 initialValue: 0 
       * initialValue: [moment('2019-11-16 12:50:26'), moment('2019-11-16 12:50:26')],
       */
      initialValue: ['1', '2'],

      /**
       * password | 密码框 | 密码相关的展示 |
       * money | 转化值为金额 | ¥10,000.26 |
       * textarea | 与 text 相同， form 转化时会转为 textarea 组件 | - |
       * option | 操作项，会自动增加 marginRight，只支持一个数组,表单中会自动忽略 | `[<a>操作a</a>,<a>操作b</a>]` |
       * date | 日期 | 2019-11-16 |
       * dateWeek 周 |2020-40周
       * dateMonth 月 |2020-10
       * dateQuarter 季度 /2020-Q4
       * dateYear   年 |2020
       * dateRange | 日期区间 | 2019-11-16 2019-11-18 
       * dateTimeRange | 日期和时间区间 | 2019-11-16 12:50:00 2019-11-18 12:50:00 
       * dateTime | 日期和时间 | 2019-11-16 12:50:00 
       * time | 时间 | 12:50:00 
       * text | 默认值，不做任何处理 
       * select | 选择 
       * checkbox 多选
       * rate  评分
       * radio 单选
       * radioButton 单选按钮形状显示
       * index | 序号列 
       * indexBorder | 带 border 的序号列 
       * progress | 进度条
       * percent | 百分比 | +1.12
       * digit | [格式化](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
       * 数字展示，form 转化时会转为 inputNumber
       * avatar | 头像 | 展示一个头像 |
       * code | 代码块 | `const a = b` 
       * switch 开关
       * fromNow 当前时间
       * jsonCode json 的代码块，格式化了一下
       */
      valueType: 'checkbox',

      /**
       * 是否支持复制
      */
      copyable: true,

      /**
       * 是否缩略
       */
      ellipsis: true,

      /**
       * 查询表单中的权重，权重大排序靠前 类型 number
       */
      order: 1,

      sorter: (a, b) => a.createdAt - b.createdAt,
      

      fieldProps: {
        className: `${style.pre}`,
      },

      /**
       *  valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容
       */
      valueEnum: {
        0: { text: '关闭', status: 'Default' },
        1: { text: '运行中', status: 'Processing' },
        2: { text: '已上线', status: 'Success' },
        3: { text: '异常', status: 'Error' },
      },

      /**
       * 会在 title 之后展示一个 icon，hover 之后提示一些信息 | string |
       */
      tooltip: '会在 title 之后展示一个 icon，hover 之后提示一些信息',

      /**
       * 类似 table 的 render，但是必须返回 string
       */
      renderText: (val) => `${val} 万`,

      /**
       * 类似 table 的 render，第一个参数变成了 dom,增加了第四个参数 action
       */
      render: (_, record) => (<></>),
      
      /**
       * 渲染查询表单的输入组件
       */
      renderFormItem: (_, { type, defaultRender, ...rest }, form) => {
        console.group(['item', 'config']);
        console.log(_);
        console.log({ type, defaultRender, ...rest });
        console.groupEnd();
        const status = form.getFieldValue('state');
        if (type === 'form') {
          return null;
        }
        if (status === 'open') {
          return <Input {...rest} placeholder="请输入" />;
        }
        if (status === 'all' || status === undefined) {
          return false;
        }
        return defaultRender(_);
      },
     
      /**
       * 远程请求数据 valueEnum
       */
      request: async () => [
        {
          label: '全部',
          value: '0',
          status: 'Default',
        },
        {
          label: '未解决',
          value: '1',
          status: 'Error',
        },
        {
          label: '已解决',
          value: '2',
          status: 'Success',
        },
        {
          label: '已上线',
          value: '3',
          status: 'Success',
        },
        {
          label: '解决中',
          value: '4',
          status: 'Processing',
        },
      ],
      
      /**
       * 设置标题分组  例如 编号，下级标题包含 姓名 ，金额
       */
      children: [
        {
          title: 'money',
          dataIndex: 'money',
          width: 60,
          valueType: 'money',
        },
        {
          title: 'name',
          width: 60,
          dataIndex: 'name',
          valueType: 'text',
        },

      ],
    }
  ]
```