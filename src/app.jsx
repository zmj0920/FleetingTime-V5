import React from 'react';
import { notification } from 'antd';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import defaultSettings from '../config/defaultSettings';
import { SmileOutlined, HeartOutlined } from '@ant-design/icons';
import { getCurrentUser } from '@/services/account';
import { getLocalStorage } from '@/utils/authority';
import { stringify } from 'querystring';
const IconMap = {
  SmileOutlined: <SmileOutlined />,
  HeartOutlined: <HeartOutlined />,
};

export async function getInitialState() {
  const tokenStore = getLocalStorage('tokenValue');
  console.log(tokenStore);
  try {
    // 未登录的情况
    if (!tokenStore) {
      throw new Error('UNLOGIN');
    }
    const currentUser = await getCurrentUser();
    return {
      currentUser,
      settings: defaultSettings,
    };
  } catch (error) {
    const { message: errorMessage } = error;
    // 未登录，处理跳转到登录页面
    if (errorMessage === 'UNLOGIN') {
      if (history.location.pathname !== '/user/login') {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: history.location.pathname,
          }),
        });
      }
    }
  }
  return {
    settings: defaultSettings,
  };
}

const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => {
    return {
      ...item,
      icon: icon && IconMap[icon],
      children: children && loopMenuItem(children),
    };
  });

export const layout = ({ initialState }) => {
  return {
    // menuDataRender: () => loopMenuItem(initialState.menu),
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    menuHeaderRender: undefined,
    onPageChange: () => {
      const tokenStore = getLocalStorage('tokenValue');
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!tokenStore && location.pathname !== '/user/login') {
        history.push('/user/login');
      }
    },
    ...initialState?.settings,
  };
};

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error) => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }

  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};

export const request = {
  errorHandler,
  credentials: 'include', // 默认请求是否带上cookie
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer 10000',
  },
  throwErrIfParseFail: true, //当JSON.parse(res) 出错时，抛出错误
};
