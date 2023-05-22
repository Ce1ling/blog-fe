import React from 'react'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

import type { FormProps } from 'antd'


const RegisterForm: React.FC = () => {

  const onRegister: FormProps['onFinish'] = (values) => {
    console.log('register submit', values)
  }
  const onRegisterFail: FormProps['onFinishFailed'] = (error) => {
    console.log('register failed', error)
  }

  return (
    <Form onFinish={onRegister} onFinishFailed={onRegisterFail} autoComplete="off">
      <Form.Item name="email" rules={[{ required: true, message: '请输入邮箱地址/手机号码！' }]}>
        <Input 
          size="large" 
          placeholder="邮箱地址/手机号码" 
          prefix={<MailOutlined />} 
          allowClear 
        />
      </Form.Item>
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
      <Form.Item name="repassword" rules={[{ required: true, message: '请输入重复密码！' }]}>
        <Input.Password 
          size="large" 
          placeholder="重复密码" 
          prefix={<LockOutlined />} 
          allowClear 
        />
      </Form.Item>
      <Form.Item name="verify" rules={[{ required: true, message: '请输入验证码！' }]}>
        <div className="flex" gap-4>
          <Input placeholder='验证码' allowClear />
          <Button 
            size="large"
            htmlType="submit" 
            type='primary'
          >获取验证码</Button>
        </div>
      </Form.Item>
      <Form.Item>
        <Button 
          className="w-100%" 
          size="large"
          htmlType="submit" 
          type='primary'
        >注册</Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterForm