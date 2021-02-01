import React, { Component } from 'react';
import { Control } from 'react-keeper';
import { Jump } from '@unilts';

export default class componentName extends Component {

  componentDidMount(){
    console.log(Jump.get(),'--213123')
  }

  click = () => {
    Jump.back()
  }
  render() {
    return (
      <div onClick={() => this.click()}>
        LoginPageasd
      </div>
    )
  }
}
