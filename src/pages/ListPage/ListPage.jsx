import React, { Component } from 'react'

import { List } from '@components/ShowTime'

import './ListPage'

export default class ListPage extends Component {
  render() {
    return (
      <div className="ListPage">
        <List />
      </div>
    )
  }
}
