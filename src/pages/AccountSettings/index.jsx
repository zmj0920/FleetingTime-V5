import { PageContainer } from '@ant-design/pro-layout';
import { Divider } from 'antd';
import React, { useEffect, useState, useCallback } from 'react';
import { useModel } from 'umi';
import { queryNotices } from '@/services/account'

export default () => {
  const { countrys } = useModel('user', (model) => ({
    countrys: model.countrys,
  }));

  // useEffect(async() => {
  //   const { initialState, setInitialState } = useModel('@@initialState');
  //   const queryNotice = await queryNotices();
  //   setInitialState({ ...initialState, queryNotice: queryNotice });
  // }, [])
  // console.log(useModel('@@initialState'))
  return (
    <PageContainer title="测试共享数据" breadcrumb={undefined}>
      当前页面的数据会自动拉取，而且只会拉取一次
      <Divider />
      {JSON.stringify(countrys)}
    </PageContainer>
  );
};
