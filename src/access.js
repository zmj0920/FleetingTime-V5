import {
  Permissions
} from '../config/permissions';

export default (initialState = {}) => {
  const {
    currentUser
  } = initialState;
  const allPermissions = {
    ...Permissions,
  };
  return dgFlatPermissions(allPermissions, currentUser?.permissions);
};

function dgFlatPermissions(
  allPermissions,
  curPermissions = [],
) {
  let result = {};
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
