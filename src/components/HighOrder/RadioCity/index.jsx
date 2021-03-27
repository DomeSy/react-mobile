import React, { Component } from 'react'
import { Icon } from 'antd-mobile';
import { Button } from '@components/AntD'
import { Modal } from '@unilts'

import test from './test'

import './index.less'



/**
 * @param list 列表数据
 * @param name 名称
 * @param disabled 是否禁用
 * @param active 是否被选中
 */
 class Index extends Component {

  constructor(props){
    super(props);
    this.state = {
      list: test || []
    }
    let all = 0;
    let disable = 0
    test && test.map(item => {
      all += item.d.a.length
      item.d.a.map(ele => {if(ele.disabled) disable++})
    })
    this.All = all;
    this.Disable = disable
  }

  // 控制单选
  Radio = async (data, name) => {
    if(name === 'city'){
      // 城市
      let {list, index, ele, indexs} = data;
      if(ele.disabled) return
      list[index].d.a[indexs].active = list[index].d.a[indexs].active ? !list[index].d.a[indexs].active :true;
      let flag = true
      await list[index].d.a.map(item => {if(!item.active && !item.disabled){flag = false; return} })
      // console.log(flag)
      list[index].d.active = flag;
      this.setState({
        list
      })
    } else if(name === 'province') {
      //省份
      let {list, item, index} = data;
      if(item.d.disabled) return
      const active = list[index].d.active ? !list[index].d.active : true;
      list[index].d.active = active;
      list[index].d.a.map(item => item.active = active)
      this.setState({
        list
      })
    } else if(name === 'all'){
      //全选
      const { list, allActive } = data;

      list.map((item) => {
        item.d.active = allActive ? false : true
        item.d.a.map(ele => ele.active = allActive ? false : true)
      })

      this.setState({
        list,
      })
    }
  }

   // 获取省份的数量
  ActiveCity = (city) => {
    let number = 0;
    city.d.a.map(item => {if(item.active) number++})
    return number
  }

  // 判断list选取状态
  getActive = list => {
    // p_name 省份名称 p_id 省id f_id 市id
    let p_name = '', p_id = '', f_id = '', number = 0;

    // 大体思路，首先判断省份必选disabled为false，在判断省的active是否为true，如果为true，则需要判断底下市是否有disable未ture的情况，如果未false，只需要判断底下的市是active为true
    list.map(item => {
      const { disabled, active, a, n_id, n } =item.d
      if(!disabled){
        if(active){
          let active = 0;
          let activeName = '';
          a.map(ele => {
            if(!ele.disabled){
              f_id += ele.f_id + ','
              activeName += ele.f_areaname + ','
              active++
              number++
            }
          })
          p_id += n_id + ','
          if(active === a.length){
            p_name += n + ','
          }else{
            p_name += activeName
          }
        }else{
          a.map(ele => {
            if(!ele.disabled && ele.active){
              f_id += ele.f_id + ','
              p_name += ele.f_areaname + ','
              number++
            }
          })
        }
      }
    })
    return {
      p_name: p_name.substring(0, p_name.length -1),
      p_id: p_id.substring(0, p_id.length -1),
      f_id: f_id.substring(0, f_id.length -1),
      number
    }

  }

  Sure = async (result) => {
    if(!result.f_id) {
      Modal.info('请选择城市')
      return
    }
    Modal.info(`选择了${result.p_name}`)
  }

  render() {
    const { list } = this.state;
    const result = this.getActive(list);

    let allActive = false
    if(result.number + this.Disable === this.All ){
      allActive = true
    }

    return (
      <div className="RadioCity">
        <div className="RadioCity-center">
          <div className="RadioCity-center-all"><p onClick={() => this.Radio({list, allActive}, 'all')} className={allActive ? 'RadioCity-radioActive' : "RadioCity-radio"}></p>全选（<span>{result.number}</span>/{this.All}）</div>
          {
            list.map((item, index) => 
              <div className="RadioCity-center-List" key={index}>
                <div className="RadioCity-center-List-title">
                  <div>
                    <p onClick={() => this.Radio({list, item, index}, 'province')} className={item.d.disabled ? "RadioCity-radioNone" : item.d.active ? "RadioCity-radioActive" : "RadioCity-radio"}></p>
                    <p>{item.d.n}</p>
                  </div>
                  <div>
                    { this.ActiveCity(item) !== 0 && <p>已选择（{this.ActiveCity(item)}）</p> } 
                    <Icon onClick={()=> { list[index].show = list[index].show ? !list[index].show : true; this.setState({list}) }} type={item.show ? 'up' : 'down'} />
                  </div>
                </div>
                {
                  item.show && 
                  <div className="RadioCity-center-List-city">
                  {
                    item.d.a && item.d.a.map((ele, indexs) => 
                      <div
                        key={indexs+`radio`}
                        className={item.d.a.length % 2 === 1 ? indexs === item.d.a.length - 1 ? 'RadioCity-center-List-city-none' : '' : (indexs === item.d.a.length - 1 || indexs === item.d.a.length - 2) ? 'RadioCity-center-List-city-none' : ''}
                      >
                        <p 
                          onClick={() => this.Radio({list, item, index, ele, indexs}, 'city')}
                          className={ele.disabled ? "RadioCity-radioNone" : ele.active ? "RadioCity-radioActive" : "RadioCity-radio"}
                        ></p>
                        <p>{ele.f_areaname}</p>
                      </div>
                    )
                  }
                  </div>
                }
              </div>
            )
          }
        </div>
        <Button noMargin={true} onClick={() => this.Sure(result)}>确定</Button>
      </div>
    )
  }
}

export default Index

