import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { List, Avatar, Empty, message, Pagination } from 'antd'
import { UserOutlined  } from '@ant-design/icons'
import { useBlogStore } from "../../stores"
import { api } from './api'

import type { PaginationProps } from 'antd'
import type { Post, PostPaging } from '../../stores/useBlogStore'


const Blog: React.FC = () => {
  const nav = useNavigate()
  const [messageApi, messageHolder] = message.useMessage()
  const { posts, setPosts, paging, setPaging } = useBlogStore()
  
  const getPosts = async (params?: Omit<PostPaging, 'total'>) => {
    const res = await api.getPosts(params)
    if (res.code !== 0) {
      messageApi.error(res.msg)
      return
    }
    const { data, paging } = res.data
    setPosts(data)
    setPaging(paging)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const onItemClick = (item: Post) => {
    return () => {
      nav(`/blog/details?id=${item.id}`)
    }
  }

  const onPageChange: PaginationProps['onChange'] = (page, per_page) => {
    getPosts({ page, per_page })
  }

  return (
    <>
      {messageHolder}
      <List
        max-w-980px
        m-x-auto
        itemLayout="horizontal"
        dataSource={posts}
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