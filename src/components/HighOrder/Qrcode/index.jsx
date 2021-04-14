import React from 'react'
import QRCode  from 'qrcode.react';
import './index.less'


/**
 * @module 二维码
 * 
 * @param src 二维码的链接
 * @param size Number 二维码的宽高，默认200
 * @param level 等级
 * @param bgColor 二维码的背景颜色
 * @param fgColor 二维码的颜色
 * @param logo 中间的logo
 * @param logoSize size / logoSize 的值
 */
function Index({value = 'http://www.domesy.cn/#/',size = 200, bgColor="#FFFFFF", fgColor="#000000", level="H", logo = false, logoSize = 3}) {


  return (
    <div className="Qrcode">
     <QRCode
      value={value}
      size={size}
      bgColor={bgColor}
      level={level}
      fgColor={fgColor}
      imageSettings={logo ? {src: logo,height:size/logoSize,width:size/logoSize} : undefined}
    />
    </div>
  )
}

export default Index