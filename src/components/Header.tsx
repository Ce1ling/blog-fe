import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import { useHeaderStore } from '../stores'

import type { MenuProps } from 'antd'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { items, active, setActive } = useHeaderStore()

  const selecte: MenuProps['onSelect'] = ({ key }) => {
    setActive(key)
    const item = items.find(item => item?.key === key) as MenuItemType
    navigate(`/${item.label}`)
  }

  return (
    <AntHeader className='flex sticky' justify-between items-center gap-10 top-0 inset-x-0>
      <Button type="link" href='/' block w-10 h-10 p-0>
        <img className='block w-100% h-100%' src="../../public/L1en.png" alt="logo" />
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
    </AntHeader>
  )
}


export default Header