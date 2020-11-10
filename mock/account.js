const {
  ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION
} = process.env;

/**
 * 当前用户的权限，如果为空代表没登录
 * current user access， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let access = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site' ? 'admin' : '';

const getAccess = () => {
  return access;
};
const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/account/getCurrentUser': (request, response) => {
    let permissions = [];
    const token = request.get('Authorization');
    if (request && token && token !== 'null') {
      // 超级管理员
      if (token === 'Bearer 10000') {
        permissions = [
          'c0b26b10-bb9e-4d43-8afe-1493e2e24d37',
          '6dc43a47-e084-41c7-87e3-68b1fe9f57e2',
          'f98e7912-179b-4550-8029-fe55f354ea73',
          '4d60d7d9-7506-4853-a2e2-8248bc1053fa',
          'b0f6e4ee-456b-40e5-a6a7-b26c0f991006',
          '402e4172-d9ea-44f0-a2dd-364edb3b4dd0'
        ];
      } else {
        permissions = ['c0b26b10-bb9e-4d43-8afe-1493e2e24d37'];
      }
    }
    const result = {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [{
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
      permissions,
    };
    response.json(result)
    // authorizeIntercept({ request, response }, result);
  },
  'POST /api/account/login': async (req, res) => {
    const {
      password,
      username,
      captcha,
      mobile,
      type
    } = req.body;
    await waitTime(2000);
    if (
      password === 'admin' &&
      (username === 'admin' || username === 'user')
    ) {
      // 00000普通用户 10000超级管理员
      const tokenValue = username === 'user' ? '00000' : '10000';
      res.json({
        status: 'ok',
        type,
        tokenValue
      });
      return;
    }
    if (type === 'mobile') {
      if ( mobile === '13525378372' && captcha === "6666") {
        const tokenValue = username === 'user' ? '00000' : '10000';
        res.json({
          status: 'ok',
          type,
          tokenValue
        });
        return;
      }
    }
    res.json({
      status: 'error',
      type
    });
  },
  'POST /api/account/register': (request, response) => {
    response.json(responseWrapper('00000'));
  },

  'GET /api/account/outLogin': (req, res) => {
    access = '';
    res.send({
      data: {},
      success: true
    });
  },

};
