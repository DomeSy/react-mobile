import React, { Component } from 'react';
import { MagicText } from '@components/Animation';
import { Jump } from '@unilts';

import './index.less'
import Pic from '@images/Info/touxiang.png';

class Index extends Component {
  render() {
    return (
      <div className="Head">
        <div className="Head-git"><p onClick={() => Jump.href('https://github.com/DomeSy/React-mobile-Domesy')}></p></div>
        <div className="Head-Info">
          <img src={Pic} alt=""/>
          <div>Hi ！</div>
        </div>
        <MagicText />
      </div>
    );
  }
}

export default Index;