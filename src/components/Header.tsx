import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMenuStore } from '../stores'
import { Layout, Menu, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import Login from './Login/Login'

import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  const nav = useNavigate()
  const { items, active, setActive } = useMenuStore()
  const [loginVisible, setLoginVisible] = useState(false)
  
  const selecte: MenuProps['onSelect'] = ({ key }) => {
    const item = items.find(item => item.key === key)

    if (item?.label === 'Login') {
      onLoginClick()
      return
    }
    setActive(key)
    nav(item?.path || '/')
  }
  const onLoginClick = () => {
    setLoginVisible(true)
  }
  const onLoginClose = () => {
    setLoginVisible(false)
  }

  return (
    <>
      <Login show={loginVisible} onClose={onLoginClose} />
      <AntHeader className='flex sticky' justify-between items-center gap-10 top-0 inset-x-0 z-999>
        <Button type="link" href='/' block w-10 h-10 p-0>
          <img className='block w-100% h-100%' src="/L1en.svg" alt="logo" />
        </Button>
        <div className='flex' items-center gap-6 flex-basis-25rem>
          <Button icon={<EditOutlined />} type='primary' size="large" onClick={() => nav('/blog/create')}>
            写作
          </Button>
          <Menu 
            select-none
            justify-end
            flex-1
            mode="horizontal" 
            theme="dark"
            selectedKeys={[active]} 
            items={items} 
            onSelect={selecte}
          />
        </div>
      </AntHeader>
    </>
  )
}


export default Header