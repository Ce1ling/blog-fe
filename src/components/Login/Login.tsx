import React, { useState } from 'react'
import { Modal, Tabs } from 'antd'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'


interface Props {
  show: boolean
}

interface Emits {
  onClose?: () => void
}

const Login: React.FC<Props & Emits> = (props) => {
  const { show, onClose } = props
  const [items] = useState([
    { key: 'login', label: '登录', children: <LoginForm /> },
    { key: 'register', label: '注册', children: <RegisterForm /> },
  ])

  const onTabsChange = () => {
  }

  return (
    <Modal open={show} onCancel={onClose} footer={null}>
      <Tabs 
        defaultActiveKey="1" 
        size="large"
        items={items} 
        onChange={onTabsChange} 
        centered 
      />
    </Modal>
  )
}

export default Login