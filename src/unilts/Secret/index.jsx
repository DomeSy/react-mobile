import md5 from 'js-md5'
import JSEncrypt from 'jsencrypt';
import CryptoJS from 'crypto-js';
import { PUB_KEY, PRIV_KEY } from './config'

/**
 * @module 前端加密解密
 * 
 * @param md5 md5加密
 * @param RSAEncrypt RSA加密
 * @param RSAdecrypt RSA解密
 * @param DESEncrypt DES解密
 * @param DESDecrypt DES解密
 * 
 * @parm RSA
 * @param PUB_KEY RSA公钥内容
 * @param PRIV_KEY RSA私钥内容
 * 
 * @param DES
 * @param str 需要加密的数据
 * @param key 加密key
 */
class Secret{
 
  static md5 = (str='') => {
    return md5(str)
  }

  // 公钥加密
  static RSAEncrypt = (str='') => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(PUB_KEY);
    const encrypted = encrypt.encrypt(str);
    return encrypted;
  }

  // 私钥解密
  static RSADecrypt = (str='') => {
    const decrypt = new JSEncrypt();
    decrypt.setPrivateKey(PRIV_KEY);
    const decrypted = decrypt.decrypt(str);
    return decrypted;
  }

  static DESEncrypt = (str = '', key = '') => {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const encrypted = CryptoJS.DES.encrypt(str, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
  }

  static DESDecrypt = (str = '', key = '') => {
    const keyHex = CryptoJS.enc.Utf8.parse(key);
    const decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(str)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    const result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
  }



  static AESEncrypt = (str = '',keys = '1234123412ABCDEF', ivs = 'ABCDEF1234123412') => {
    const srcs = CryptoJS.enc.Utf8.parse(str);
    const key = CryptoJS.enc.Utf8.parse(keys);  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse(ivs);   //十六位十六进制数作为密钥偏移量
    const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
  }

  static AESDecrypt = (str = '',keys = '1234123412ABCDEF', ivs = 'ABCDEF1234123412') => {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(str);
    const key = CryptoJS.enc.Utf8.parse(keys);  //十六位十六进制数作为密钥
    const iv = CryptoJS.enc.Utf8.parse(ivs);   //十六位十六进制数作为密钥偏移量
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
  }
}

export default Secret

