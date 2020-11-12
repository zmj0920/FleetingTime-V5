import React, { PureComponent } from 'react';
import { Button, Tag, Space, Progress } from 'antd';
import ProList from '@ant-design/pro-list';
import { PageContainer } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import request from 'umi-request';
import ProListCusom from '@/customComponents/ProListCusom/Index'

class Welcome extends ProListCusom {

  constructor(props) {
    super(props);
  
  }
}
export default Welcome;