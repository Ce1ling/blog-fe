import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { List, Avatar, Empty } from 'antd'
import { UserOutlined  } from '@ant-design/icons'
import { useBlogStore } from "../../stores"

import type { AxiosItem } from '../../stores/useBlogStore'


const Blog: React.FC = () => {
  const nav = useNavigate()
  const { list, getBlog } = useBlogStore()
  
  useEffect(() => {
    getBlog()
  }, [])

  const click = (item: AxiosItem) => {
    return () => {
      nav(`/blog/details?id=${item.id}`)
    }
  }

  return (
    <List
      max-w-980px
      m-x-auto
      itemLayout="horizontal"
      dataSource={list}
      locale={{ emptyText: <Empty className="m-y-20" description="no article" /> }}
      renderItem={item => (
        <List.Item 
          className="hover:bg-#dddddd transition-all duration-300 cursor-pointer !p-x-4 rounded-md" 
          onClick={click(item)}
        >
          <List.Item.Meta
            className="!items-center"
            avatar={<Avatar size="large" src={item.avatar} icon={<UserOutlined />} />}
            title={<p className="m-0 text-lg font-bold">{item.title}</p>}
            description={item.content}
          />
        </List.Item>
      )}
    />
  )
}

export default Blog