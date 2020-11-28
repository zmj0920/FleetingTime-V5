import React, { useState } from 'react';
import { Radio, Switch, Space, Descriptions } from 'antd';
import moment from 'moment';
import Field from '@ant-design/pro-field';
import { isImg ,isNil} from '@/utils/tools'

export default () => {
  const [state, setState] = useState('read');

  console.log(isNil(null))
  return (
    <>
      <Space>
        <Radio.Group onChange={e => setState(e.target.value)} value={state}>
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="空字符串">
          <Field text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <Field
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>

        <Descriptions.Item label="indexBorder">
          <Field
            text="0"
            mode={state}
            valueType="indexBorder"
          />
        </Descriptions.Item>

        <Descriptions.Item label="文本">
          <Field text="这是一段文本" valueType="text" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="textarea">
          <Field text="这是一段文本" valueType="textarea" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <Field text="100" valueType="money" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <Field text="19897979797979" valueType="digit" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Field text="100" valueType="percent" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <Field text={3.5} valueType="rate" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <Field
            text="open"
            mode={state}
            valueEnum={{
              all: {
                text: '全部',
                disabled: true,
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
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <Field
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: {
                text: '全部',
                disabled: true,
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
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <Field
            text="open"
            mode={state}
            valueType="radio"
            valueEnum={{
              all: {
                text: '全部',
                disabled: true,
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
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <Field
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: {
                text: '全部',
                disabled: true,
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
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <Field
            text="open"
            mode={state}
            request={() => [
              {
                label: '全部',
                value: 'all',
              },
              {
                label: '未解决',
                value: 'open',
              },
              {
                label: '已解决',
                value: 'closed',
              },
              {
                label: '解决中',
                value: 'processing',
              },
            ]}
          />
        </Descriptions.Item>

        <Descriptions.Item label="进度条">
          <Field text="40" valueType="progress" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <Field
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <Field
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <Field
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <Field
            text={moment('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="switch">
          <Field
            text="true"
            valueType="switch"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <Field
              text={moment('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}

            />
            <Field
              text={moment('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}

            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <Field
            text={moment('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}

          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <Field
            text={[
              moment('2019-11-16 12:50:26')
                .add(-1, 'd')
                .valueOf(),
              moment('2019-11-16 12:50:26').valueOf(),
            ]}

            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <Field
            text={[
              moment('2019-11-16 12:50:26')
                .add(-1, 'd')
                .valueOf(),
              moment('2019-11-16 12:50:26').valueOf(),
            ]}

            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <Field
            text={moment('2019-11-16 12:50:26').valueOf()}

            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <Field text="password" valueType="password" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <Field
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}

          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <Field
            text={`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "suppressImplicitAnyIndexErrors": true,
    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
            valueType="jsonCode"
            mode={state}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
