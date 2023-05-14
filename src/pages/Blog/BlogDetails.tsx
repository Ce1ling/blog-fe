import React, { useEffect } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Button, message, Card } from 'antd'
import { useBlogStore } from '../../stores'


const BlogDetails: React.FC = () => {
  const nav = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { details, getBlogDetails, setBlogDetails } = useBlogStore()
  const [messageApi, messageHolder] = message.useMessage()

  const getBlogDetailsById = async (id: string | number | null) => {
    if (id === null) { 
      messageApi.error(`"id" does not exist`)
      return
    }
    if ((typeof id === 'string') && !id.trim()) {
      messageApi.error(`"id" can't be null`)
      return
    }
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

  useEffect(() => {
    setSearchParams(location.search)
    getBlogDetailsById(searchParams.get('id'))
  }, [])

  return (
    <>
      {messageHolder}
      <Card className='relative min-h-100%' title={
        <>
          <Button 
            className='absolute inset-t-6 inset-l-6' 
            onClick={() => nav('/blog')}
          >返回</Button>
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