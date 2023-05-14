import React from "react"
import { List, Avatar } from 'antd'
import { UserOutlined  } from '@ant-design/icons'
import { useBlogStore } from "../stores"

import type { Item } from '../stores/useBlogStore'


const Blog: React.FC = () => {
  const { list } = useBlogStore()

  const click = (item: Item) => {
    return () => {
      console.log(item)
    }
  }

  return (
    <List
      itemLayout="horizontal"
      dataSource={list}
      renderItem={item => (
        <List.Item 
          className="hover:bg-#dddddd transition-all duration-300 cursor-pointer !p-x-4 rounded-md" 
          onClick={click(item)}
        >
          <List.Item.Meta
            className="!items-center"
            avatar={<Avatar size="large" src={item.avatar} icon={<UserOutlined />} />}
            title={<p className="text-2xl">{item.title}</p>}
            description={item.desc}
          />
        </List.Item>
      )}
    />
  )
}

export default Blog