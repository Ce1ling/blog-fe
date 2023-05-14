import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
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