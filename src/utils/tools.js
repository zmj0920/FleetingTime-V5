export const isNil = (value) => value === null || value === undefined;
/** 判断是否是图片链接 */

export function isImg(path) {
    return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(path);
}

export const isUrl = (path) => /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path);

export const omitUndefined = (obj) => {
    const newObj = {};
    Object.keys(obj || {}).forEach((key) => {
        if (obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    });
    return newObj;
};





