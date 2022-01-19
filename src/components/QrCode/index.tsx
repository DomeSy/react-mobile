
import React from 'react';
import QRCode  from 'qrcode.react';
import { QrCodeProps } from './interface.d'
import './index.less'

const QrCode:React.FC<QrCodeProps> = ({ src, imageSettings, ...props }) => {
  return (
    <QRCode
      value={src}
      imageSettings={{
        height: 30,
        width: 30,
        src: imageSettings ? imageSettings.src : '',
        ...imageSettings
      }}
      {...props}
    />
  )
}

export default QrCode
