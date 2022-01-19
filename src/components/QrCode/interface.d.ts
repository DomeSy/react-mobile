
export interface QrCodeProps {
  src: string; //生成二维码的链接
  size?: number; // 设置大小
  renderAs?: 'canvas' | 'svg' //生成方式，默认 canvas
  includeMargin?: boolean; // 是否需要Margin
  bgColor?: string; // 背景颜色 "#FFFFFF"
  fgColor?: string; // 二维码颜色 "#000000"
  level?: "L"|"M"|"Q"|"H"; // 'L'
  imageSettings?: ImageSettings;
}

interface ImageSettings {
  src: string; //地址
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  excavate?: boolean;
}


