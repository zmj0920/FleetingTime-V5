import * as userService from '@/services/account';
import { useRequest } from 'ahooks';
import { useCallback } from 'react';

export default function useAuthModel() {
  const { data, loading, run } = useRequest(userService.queryNotices, {
    refreshDeps: [],
  });
  const getCountrys = useCallback(() => {
    run();
  }, []);

  return {
    countrys: data,
    loading,
    getCountrys,
  };
}
