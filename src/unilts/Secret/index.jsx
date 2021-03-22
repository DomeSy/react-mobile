import md5 from 'js-md5'

/**
 * @module 前端加密解密
 * 
 */
class Secret{
 
  static md5 = (str='') => {
    return md5(str)
  }
}

export default Secret