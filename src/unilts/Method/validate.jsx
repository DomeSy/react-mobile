/**
 * @module 验证
 */

/**
 * @module 验证身份证
 * 
 * @param idcard 身份证号
 */
const validateIdCard = (idcard) => {
  let pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  if (pattern.test(idcard)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @module 验证手机号
 * 
 * @param phoneNumber 手机号
 */
const validatePhone = (phoneNumber) => {
  console.log(phoneNumber,'000')
  if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
    return false;
  } else {
    return true;
  }
}

/**
 * @module 验证邮箱
 * 
 * @param email 邮箱
 */
const validateEmail = (email) => {
  let emailReg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  if (emailReg.test(email)) {
    return true;
  } else {
    return false;
  }
}

/**
 * @module 验证密码是否合法(6-18位字母和数字
 * 
 * @param password 密码
*/
const validateUpwd = (password) => {
  if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(password))) {
    return false;
  } else {
    return true;
  }
}

/**
 * @module 验证银行卡号
 * 
 * @param CardCode 银行卡号
 */
const validateCardCode = (CardCode) => {
  let pattern = /^([1-9]{1})(\d{14}|\d{18})$/;
  if (pattern.test(CardCode)) {
    return true;
  } else {
    return false;
  }
}

export {
  validateIdCard,
  validatePhone,
  validateEmail,
  validateUpwd,
  validateCardCode
}