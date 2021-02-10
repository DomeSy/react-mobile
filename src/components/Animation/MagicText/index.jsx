import React from 'react'
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";
import MagicArr from './test'
import './index.less'

/**
 * @module 打字组件
 * 
 * @param text 文本，可为字符串，或数组，如果为数组，则会循环播放
 */
let index = 0;
function Index({text = MagicArr}) {

  const InitText = typeof text === 'string' ? text : text[0];
  const [magicName, setMagicName] = useState(InitText);
  const intervalRef = useRef({});
  const margicText = useTypewriter(magicName);

  useEffect(
    () => {
      if(typeof text !== 'string'){
        intervalRef.current = setInterval(() => {
          index = index > text.length - 2 ? 0 : ++index;
          setMagicName(text[index]);
        }, 5000);
        return function clear() {
          clearInterval(intervalRef.current);
        };
      }
    },
    [magicName]
  );

  return (
    <div className="WriteText">
      <p className="WriteText-cursor">{margicText}</p>
    </div>
  );
}

export default Index;
