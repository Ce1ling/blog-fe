import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import type { FormProps } from 'antd'


const LoginForm: React.FC = () => {

  const onLogin: FormProps['onFinish'] = (values) => {
    console.log('login submit', values)
  }
  const onLoginFail: FormProps['onFinishFailed'] = (error) => {
    console.log('login failed', error)
  }

  return (
    <Form onFinish={onLogin} onFinishFailed={onLoginFail} autoComplete="off" initialValues={{ remember: true }}>
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
        <Input 
          size="large" 
          placeholder="用户名" 
          prefix={<UserOutlined />} 
          allowClear 
        />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
        <Input.Password 
          size="large" 
          placeholder="密码" 
          prefix={<LockOutlined />} 
          allowClear 
        />
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" >
        <Checkbox>记住我</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button 
          className="w-100%" 
          size="large"
          type="primary" 
          htmlType="submit" 
        >登录</Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm