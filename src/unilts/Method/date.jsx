
/**
 * @module 获取年月日
 * 
 * @param {*} type 
 * @param {*} show 
 */ 
const getDate = (type, show) => {
  let dd = new Date();
  let option = {};
  let isShow = 0;
  if (type) {
    option = {
      year: type.year || '',
      mounth: type.mounth || '',
      day: type.day || '',
    }
  } else {
    option = {
      year: '-',
      mounth: '-',
      day: '',
    }
  }
  if (show) {
    isShow = show
  }
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  let result = ''
  if (isShow == 0) {
    result = `${y}${option.year}${m}${option.mounth}${d}${option.day}`
  } else if (isShow == 1) {
    result = `${m}${option.mounth}${d}${option.day}`
  } else if (isShow == 2) {
    result = `${d}${option.day}`
  }
  return result;
}

/**
 * @module 获取JS日期后几天的时间
 * 
 * @param date为获取的日期 格式为 2020-06-22
 * @param day: 几天的日期, 正数为后几天， 负数为前几天
 * @param type： 显示年月日的字样
 * @param show: Numebr 默认为0 显示年月日 1 显示 月 日 2：显示 日
 */
const getDateTime = (date, day, type, show = 0) => {
  let dd = new Date(date);
  let option = {};
  if (type) {
    option = {
      year: type.year || '',
      mounth: type.mounth || '',
      day: type.day || '',
    }
  } else {
    option = {
      year: '',
      mounth: '',
      day: '',
    }
  }
  day = Number(day)
  dd.setDate(dd.getDate() + day);
  let y = dd.getFullYear();
  let m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  let result = ''
  if (show == 0) {
    result = `${y}${option.year}${m}${option.mounth}${d}${option.day}`
  } else if (show == 1) {
    result = `${m}${option.mounth}${d}${option.day}`
  } else if (show == 2) {
    result = `${d}${option.day}`
  }
  return result;
}

export {
  getDate,
  getDateTime
}