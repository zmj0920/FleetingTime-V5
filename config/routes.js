import {
  Permissions
} from './permissions'
export default [{
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/user',
    layout: false,
    routes: [{
      name: 'login',
      path: '/user/login',
      component: './user/login',
    }, ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    access: Permissions.template.welcome.index,
    component: './Welcome',
  },
  {
    path: '/account',
    name: 'account',
    icon: 'smile',
    routes: [
      {
        name: 'settings',
        icon: 'smile',
        path: '/account/settings',
        component: './AccountSettings',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: Permissions.template.admin.index,
    component: './Admin',
    routes: [{
      path: '/admin/sub-page',
      name: 'sub-page',
      access: Permissions.template.admin.list.index,
      icon: 'smile',
      component: './Welcome',
    }, ],
  },
  {
    path: '/list',
    icon: 'table',
    name: 'list',
    routes: [
      {
        name: 'table-list',
        icon: 'table',
        access: Permissions.template.list.index,
        path: '/list/table-list',
        component: './ListTableList',
      },
      
    ],
  },
  {
    name: 'modalfrom',
    icon: 'smile',
    path: '/modalfrom',
    component: './ModalFrom',
  },
  {
    component: './404',
  },
];
