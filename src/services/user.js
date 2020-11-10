import { request } from 'umi';

export async function queryNotices(){
  return request('/api/notices');
}
