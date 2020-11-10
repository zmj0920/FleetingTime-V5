import { API_PREFIX } from '@/constants';
import { request } from 'umi';

export async function getCurrentUser() {
  return request(`${API_PREFIX}account/getCurrentUser?timespan=1604928280807`)
}

export async function login(params) {
  return request(`${API_PREFIX}account/login`, {
    method: 'POST',
    data: params,
  })
}

export async function register(params) {
  return request(`${API_PREFIX}account/register`, {
    method: 'POST',
    data: params,
  })
}

export async function testData(params) {
  return request('/api/test', {
    method: 'POST',
    data: params,
  });
}

export async function outLogin() {
  return request('/api/account/outLogin');
}
