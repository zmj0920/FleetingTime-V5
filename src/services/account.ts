import { API_PREFIX } from '@/constants';
import { request } from 'umi';

export async function getCurrentUser() {
  return request(`${API_PREFIX}account/getCurrentUser?timespan=1604928280807`)
}

export async function login(params: any) {
  return request(`${API_PREFIX}account/login`, {
    method: 'POST',
    data: params,
  })
}

export async function register(params: any) {
  return request(`${API_PREFIX}account/register`, {
    method: 'POST',
    data: params,
  })
}
