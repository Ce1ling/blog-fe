import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useHeaderStore } from '../stores'
import { Layout, Menu, Button } from 'antd'
import { EditOutlined } from '@ant-design/icons'

import type { MenuProps } from 'antd'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

const { Header: AntHeader } = Layout

const Header: React.FC = () => {
  const nav = useNavigate()
  const { items, active, setActive } = useHeaderStore()

  const selecte: MenuProps['onSelect'] = ({ key }) => {
    setActive(key)
    const item = items.find(item => item?.key === key) as MenuItemType
    nav(`/${item.label}`)
  }
  const createBlog = () => {
    nav('/blog/create')
  }

  return (
    <AntHeader className='flex sticky' justify-between items-center gap-10 top-0 inset-x-0 z-999>
      <Button type="link" href='/' block w-10 h-10 p-0>
        <img className='block w-100% h-100%' src="/L1en.png" alt="logo" />
      </Button>
      <div className='flex' items-center gap-6>
        <Button icon={<EditOutlined />} type='primary' size="large" onClick={createBlog}>
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
  )
}


export default Header