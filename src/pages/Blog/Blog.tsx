import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { List, Avatar, Empty, message } from 'antd'
import { UserOutlined  } from '@ant-design/icons'
import { useBlogStore } from "../../stores"

import type { BlogItem } from '../../stores/useBlogStore'


const Blog: React.FC = () => {
  const nav = useNavigate()
  const [messageApi, messageHolder] = message.useMessage()
  const { list, getBlog, setBlog } = useBlogStore()
  
  const getBlogList = async () => {
    const res = await getBlog()
    if (res.code !== 0) {
      messageApi.error(res.msg)
      return
    }
    setBlog(res.data)
  }

  useEffect(() => {
    getBlogList()
  }, [])

  const click = (item: BlogItem) => {
    return () => {
      nav(`/blog/details?id=${item.id}`)
    }
  }

  return (
    <>
      {messageHolder}
      <List
        max-w-980px
        m-x-auto
        itemLayout="horizontal"
        dataSource={list}
        locale={{ emptyText: <Empty className="m-y-20" description="no article" /> }}
        renderItem={item => (
          <List.Item 
            className="hover:bg-#dddddd transition-all duration-300 cursor-pointer !p-x-4 rounded-md" 
            onClick={click(item)}>
            <List.Item.Meta
              className="!items-center"
              avatar={<Avatar size="large" src={item.avatar} icon={<UserOutlined />} />}
              title={<p className="m-0 text-lg font-bold ellipsis-uniline">{item.title}</p>}
              description={<p className="ellipsis-2">{item.content}</p>}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default Blog