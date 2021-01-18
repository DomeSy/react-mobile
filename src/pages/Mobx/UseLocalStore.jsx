import React from 'react';
import { useLocalStore, useObserver } from 'mobx-react';

function UseLocalStore(props) {

  const countStore = useLocalStore(
    () => ({
      count: props.init || 0,
      add(){
        console.log(this.count)
        this.count = this.count + 1;
      },
      get emoji(){
        return this.count % 2 ? '🚀' : '🙅‍♀️'
      }
    })
  )

  return useObserver(() =>(
    <div>
      <h1>UseLocalStore</h1>
      <button onClick={countStore.add}>count: {countStore.count}</button>
    </div>
  ));
}

export default UseLocalStore;