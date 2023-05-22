import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { List, Avatar, Empty, message, Pagination } from 'antd'
import { UserOutlined  } from '@ant-design/icons'
import { useBlogStore } from "../../stores"
import { api } from './api'

import type { PaginationProps } from 'antd'
import type { BlogItem, PostPaging } from '../../stores/useBlogStore'


const Blog: React.FC = () => {
  const nav = useNavigate()
  const [messageApi, messageHolder] = message.useMessage()
  const { blogs, setBlogs, paging, setPaging } = useBlogStore()
  
  const getBlogs = async (params?: Omit<PostPaging, 'total'>) => {
    const res = await api.getBlogs(params)
    if (res.code !== 0) {
      messageApi.error(res.msg)
      return
    }
    const { data, paging } = res.data
    setBlogs(data)
    setPaging(paging)
  }

  useEffect(() => {
    getBlogs()
  }, [])

  const onItemClick = (item: BlogItem) => {
    return () => {
      nav(`/blog/details?id=${item.id}`)
    }
  }

  const onPageChange: PaginationProps['onChange'] = (page, per_page) => {
    getBlogs({ page, per_page })
  }

  return (
    <>
      {messageHolder}
      <List
        max-w-980px
        m-x-auto
        itemLayout="horizontal"
        dataSource={blogs}
        locale={{ emptyText: <Empty className="m-y-20" description="no article" /> }}
        renderItem={item => (
          <List.Item 
            className="hover:bg-#dddddd transition-all duration-300 cursor-pointer !p-x-4 rounded-md" 
            onClick={onItemClick(item)}>
            <List.Item.Meta
              className="!items-center"
              avatar={<Avatar size="large" src={item.avatar} icon={<UserOutlined />} />}
              title={<p className="m-0 text-lg font-bold ellipsis-uniline">{item.title}</p>}
              description={<p className="ellipsis-2">{item.content}</p>}
            />
          </List.Item>
        )}
      />
      <Pagination 
        className="flex w-980px m-auto justify-center p-t-10" 
        showQuickJumper 
        defaultCurrent={paging.page} 
        total={paging.total} 
        onChange={onPageChange}
      />
    </>
  )
}

export default Blog