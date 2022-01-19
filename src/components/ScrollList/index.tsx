import React, { useState } from 'react';
import { InfiniteScroll, Loading } from 'antd-mobile'
import { IndexProps } from './interface.d'
import { useReactive } from 'ahooks';

/**
 * @module 无限滚动，列表懒加载
 */

function setWait(number:number) {
  return new Promise((resolve:any) => {
    setTimeout(() => {
      resolve();
    }, number);
  });
}

const Index:React.FC<IndexProps> = ({ onRequest, payload, calcData, childrenNode, LoadingNode, NoneNode, threshold = 250, wait = 1000}) => {

  let [node, setNode] = useState<React.ReactNode>(<></>)

  const state = useReactive<any>({
    hasMore: true,
    page: 1,
    number: 0,
    data: []
  })

  const loadMore = async () => {
    await setWait(wait)
    let params:any = {}
    params[payload?.pageName || 'page'] = state.page;
    params[payload?.sizeName || 'pageSize'] = payload?.sizeNumber || 10;
    const res = await onRequest(calcData ? { ...calcData(), ...payload} : params)
    const number = state.number + res[payload?.list || 'list'].length;
    const data = [...state.data, ...res[payload?.list || 'list']]
    delete res[payload?.list || 'list']
    setNode(childrenNode({ list: data, res }))
    state.hasMore = false
    state.number = number
    state.data = data
    if(res[payload?.all || 'all'] <= number){
      state.hasMore = false
    }else{
      state.hasMore = true
      state.page++
    }
  }

  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return (
      <>
        {hasMore ? LoadingNode ? (<>{LoadingNode}</>) : (
          <>
            <span>加载中</span>
            <Loading />
          </>
        ) : NoneNode ? (<>{NoneNode}</>) : (
          <span>--- 我是有底线的 ---</span>
        )}
      </>
    )
  }

  return (
    <>
      {node}
      <InfiniteScroll loadMore={loadMore} hasMore={state.hasMore} threshold={threshold}>
        <InfiniteScrollContent hasMore={state.hasMore} />
      </InfiniteScroll>
    </>
  );
}

export default Index;
