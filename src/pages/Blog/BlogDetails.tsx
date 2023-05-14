import React, { useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Button, message, Card, Popconfirm } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useBlogStore } from '../../stores'


type SearchParams = string | null

interface HasSearchParam {
  (param: SearchParams): boolean
}

const BlogDetails: React.FC = () => {
  const nav = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [messageApi, messageHolder] = message.useMessage()
  const { 
    details, 
    getBlogDetails, 
    setBlogDetails,
    delBlog
  } = useBlogStore()

  const hasSearchParam: HasSearchParam = (param) => {
    if (param === null) { 
      messageApi.error(`"id" 不存在！`)
      return false
    }
    if ((typeof param === 'string') && !param.trim()) {
      messageApi.error(`"id" 不能为空！`)
      return false
    }
    return true
  }
  const getBlogDetailsById = async (id: SearchParams) => {
    if (!hasSearchParam(id)) { return }

    const res = await getBlogDetails(Number(id))
    setBlogDetails(res.data[0])
  }
  const getDate = (timestamp?: number) => {
    const date = timestamp ? new Date(timestamp) : new Date()
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const h = date.getHours().toString().padStart(2, '0')
    const m = date.getMinutes().toString().padStart(2, '0')
    const s = date.getSeconds().toString().padStart(2, '0')

    return `${year}/${month}/${day} ${h}:${m}:${s}`
  }
  const deleteBlog = (id: SearchParams) => {
    return async () => {
      if (!hasSearchParam(id)) { return }

      const res = await delBlog(Number(id))
      if (res.code !== 0) {
        messageApi.error(res.msg)
        throw new Error(res.msg)
      }
      messageApi.success(`${res.msg}, 准备跳转中...`)
      setTimeout(() => nav('/'), 1500)
    }
  }

  useEffect(() => {
    setSearchParams(location.search)
    getBlogDetailsById(searchParams.get('id'))
  }, [])

  return (
    <>
      {messageHolder}
      <Card className='relative min-h-100%' title={
        <>
          <div className='absolute inset-t-6 inset-l-6 flex gap-4'>
            <Button onClick={() => nav('/blog')}>返回</Button>
            <Popconfirm
              title="删除文章"
              description="您确定删除此文章吗？"
              icon={<ExclamationCircleOutlined />}
              placement='bottom'
              okType='danger'
              okText="确定"
              cancelText="取消"
              onConfirm={deleteBlog(searchParams.get('id'))}
            >
              <Button type='primary' danger>删除</Button>
            </Popconfirm>
          </div>
          <div className='m-y-10 text-center'>
            <h1 className='m-0'>{details?.title}</h1>
            <span className='font-normal m-r-4'>
              作者: 
              <span className='cursor-pointer hover:text-blue'> {details?.author} </span>
            </span>
            <span className='font-normal'>日期: {getDate(details?.create_at)}</span>
          </div>
        </>
      } actions={[<span>The end.</span>]}>
        {details?.content}
      </Card>
    </>
  )
}


export default BlogDetails  