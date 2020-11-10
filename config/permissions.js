/**
 * 权限定义
 */
const Permissions = {
    template: {
      welcome: {
        index: 'c0b26b10-bb9e-4d43-8afe-1493e2e24d37',
      },
      admin: {
        index: '6dc43a47-e084-41c7-87e3-68b1fe9f57e2',
        list: {
          index: 'f98e7912-179b-4550-8029-fe55f354ea73',
        },
      },
      list:{
        index:'4d60d7d9-7506-4853-a2e2-8248bc1053fa',
        edit: 'b0f6e4ee-456b-40e5-a6a7-b26c0f991006',
        delete: '402e4172-d9ea-44f0-a2dd-364edb3b4dd0',
      }
    },
  };
  export { Permissions };