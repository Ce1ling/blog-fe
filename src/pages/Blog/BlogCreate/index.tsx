import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Card, message } from 'antd'

import type { InputProps } from 'antd'
import { api } from './api'


interface Stauts {
  title: InputProps['status']
  content: InputProps['status']
}

const { TextArea } = Input

const BlogCreate: React.FC = () => {
  const nav = useNavigate()
  const [messageApi, messageHolder] = message.useMessage()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<Stauts>({ title: '', content: '' })

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setStatus(prev => ({ ...prev, title: '' }))
  }
  const onContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
    setStatus(prev => ({ ...prev, content: '' }))
  }
  const hasValue = () => {
    if (!title.trim() || !content.trim()) {
      if (!title.trim()) {
        setStatus(prev => ({ ...prev, title: 'error' }))
        messageApi.error('请输入标题')
      }
      if (!content.trim()) {
        setStatus(prev => ({ ...prev, content: 'error' }))
        messageApi.error('请输入内容')
      }
      return false
    }
    return true
  }
  const create = async () => {
    if (!hasValue()) { return }

    const res = await api.createBlog({ title, content })
    if (res.code !== 0) {
      messageApi.error(res.msg)
      return
    }
    messageApi.success(res.msg)
  }

  return (
    <>
      {messageHolder}
      <div className='flex' items-center gap-2 m-b-2>
        <Button onClick={() => nav('/blog')}>返回</Button>
        <Button type="primary" onClick={create}>保存</Button>
      </div>
      <Card>
        <Input 
          value={title} 
          onChange={onTitleChange} 
          placeholder='请输入标题' 
          allowClear 
          size='large'
          style={{ marginBottom: '1rem' }}
          status={status.title}
        />
        <TextArea 
          value={content} 
          onChange={onContentChange} 
          placeholder='请输入内容' 
          showCount 
          rows={25}
          status={status.content}
        />
      </Card>
    </>
  )
}

export default BlogCreate