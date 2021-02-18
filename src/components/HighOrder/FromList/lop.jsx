import React, { useEffect ,useContext, useState} from 'react';
import {Icon,List,InputItem,Button,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';

const CountSet = (props)=>{

    const { getFieldProps, getFieldError } = props.form;
    const [password,setPassword] = useState('');

    const onSubmit = ()=>{
      console.log(props.form.getFieldsValue(),'11')
        props.form.validateFields({ force: true }, (error) => {
            if (!error) {
              console.log(props.form.getFieldsValue());
            } else {
              console.log('Validation failed');
            }
          });
    }
    const validatePassword = (rule, value, callback) => {
        if (value && value.length >=8) {
          setPassword(value);
          callback();
        } else if(value.length===0){
          callback(new Error('请输入密码'));
        } else {
            callback(new Error('请输入至少8位密码'));
        }
      }
    const validateRePassword = (rule, value, callback) => {
        if (value && value===password) {
          callback();
        } else if(value.length===0){
          callback(new Error('请再次输入密码'));
        } else {
          callback(new Error('两次输入密码不一致'));
        }
      }
    const validateTel = (rule, value, callback) => {
        if (value && value.length===13) {
            callback();
        } else if(value.length===0){
            callback(new Error('请输入电话号码'));
        } else {
            callback(new Error('电话号码不合法'));
        }
    }
    const validateEmail = (rule,value,callback) => {
    let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(reg.test(value)){
            callback();
        }else if(value.length===0){
            callback(new Error('请输入邮箱'));
        } else {
            callback(new Error('邮箱不合法'));
        }
    }
    return(
        <form className='count-setting'>
                <List>
                    {/* <InputItem
                        {...getFieldProps('password', {
                            rules: [
                            { validator: validatePassword },
                            ],
                        })}
                        error={!!getFieldError('password')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('password'), 1);
                          }}
                        clear
                        type="password"
                        placeholder="请输入"
                        >
                        <span>用户密码</span>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('repassword', {
                            rules: [
                            { validator: validateRePassword },
                            ],
                        })}
                        error={!!getFieldError('repassword')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('repassword'), 1);
                          }}
                        clear
                        type="password"
                        placeholder="请输入"
                        >
                        <span>重复密码</span>
                    </InputItem> */}
                    <InputItem
                        {...getFieldProps('tel', {
                            rules: [
                            { validator: validateTel},
                            ],
                        })}
                        error={!!getFieldError('tel')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('tel'), 1);
                          }}
                        clear
                        type="phone"
                        placeholder="请输入"
                        >
                        <span>电话号码</span>
                    </InputItem>
                    {/* <InputItem
                        {...getFieldProps('email', {
                            rules: [
                            { validator:validateEmail},
                            ],
                        })}
                        error={!!getFieldError('email')}
                        onErrorClick={() => {
                            Toast.info(getFieldError('email'), 1);
                          }}
                        clear
                        placeholder="请输入"
                        >
                        <span>电子邮箱</span>
                    </InputItem> */}
                    <List.Item>
                        <Button type='primary' onClick={onSubmit}>确认</Button>
                    </List.Item>
                </List>
            </form>
    )
}

export default createForm()(CountSet);