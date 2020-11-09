// src/access.ts
// export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
//   const { currentUser } = initialState || {};
//   return {
//     canAdmin: currentUser && currentUser.access === 'admin',
//   };
// }

import { IGlobalProps } from '@/services/global.d';
import { Permissions } from '../config/permissions';

export default (initialState: IGlobalProps = {}) => {
  const { currentUser } = initialState;
  const allPermissions = {
    ...Permissions,
  };
  return dgFlatPermissions(allPermissions, currentUser?.permissions);
};

function dgFlatPermissions(
  allPermissions: object,
  curPermissions: string[] = [],
) {
  let result: object = {};
  for (const key in allPermissions) {
    if (allPermissions.hasOwnProperty(key)) {
      if (typeof allPermissions[key] === 'string') {
        result[allPermissions[key]] = curPermissions.indexOf(allPermissions[key]) !== -1;
      } else {
        const subResult = dgFlatPermissions(allPermissions[key], curPermissions);
        result = {
          ...result,
          ...subResult,
        };
      }
    }
  }
  return result;
}
