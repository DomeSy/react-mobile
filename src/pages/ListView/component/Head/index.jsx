import React, { Component } from 'react';
import { MagicText } from '@components/Animation';

import './index.less'
import Pic from '@images/Info/touxiang.png';

class Index extends Component {
  render() {
    return (
      <div className="Head">
        <div className="Head-Info">
          <img src={Pic} alt=""/>
          <div>Hi Domesy!</div>
        </div>
        <MagicText />
      </div>
    );
  }
}

export default Index;