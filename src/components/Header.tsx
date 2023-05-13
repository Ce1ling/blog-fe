import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import type { MenuProps } from 'antd'

const { Header: AntHeader } = Layout

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Blog',
  },
  {
    key: '2',
    label: 'Projects',
  },
  {
    key: '3',
    label: 'SignIn'
  }
]

const Header: React.FC = () => {
  const [active, setActive] = useState('1')
  const navigate = useNavigate()
  
  const selecte: MenuProps['onSelect'] = ({ key, domEvent }) => {
    setActive(key)
    navigate(`/${(domEvent.target as HTMLElement).innerText}`)
  }

  return (
    <AntHeader>
      <Menu 
        select-none
        justify-end
        mode="horizontal" 
        theme="dark"
        selectedKeys={[active]} 
        items={items} 
        onSelect={selecte}
      />
    </AntHeader>
  )
}


export default Header