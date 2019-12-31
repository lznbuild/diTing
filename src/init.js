export const init=({appId})=>{
/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
    window.onerror=function(msg, url, row, col, error){
        /**
         * 发送错误信息
         */
        console.warn('msg',msg);
        console.warn('url',url);
        console.warn('row',row);
        console.warn('col',col);
        console.warn('error',error);
        return true
    }
}