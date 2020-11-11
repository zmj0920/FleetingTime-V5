// export { getToken, setToken, clearToken } from '@wetrial/core/es/authority';

/**
 * 移除LocalStorage数据
 * @export
 * @param {*} key
 */
export function removeLocalStorage(key) {
    const storage = window.localStorage;
    storage.removeItem(key);
}

/**
 * 清空LocalStorage数据
 * @export
 * @param {*} key
 */
export function clearLocalStorage() {
    const storage = window.localStorage;
    storage.clear();
}

/**
* 获取LocalStorage数据
* @export
* @param {*} key
* @param {*} value
*/
export function getLocalStorage(key) {
    const storage = window.localStorage;
    return storage.getItem(key);
}

/**
 * 存储本地数据
 * @export
 * @param {*} key
 * @param {*} value
 */
export function setLocalStorage(key, value) {
    const storage = window.localStorage;
    storage.setItem(key, value);
}