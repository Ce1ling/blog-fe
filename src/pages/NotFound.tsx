import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useHeaderStore } from '../stores'
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const NotFound: React.FC = () => {
  const navigate = useNavigate()
  const { resetActive } = useHeaderStore()

  const Back = () => {
    resetActive()
    navigate('/')
  }

  return (
    <div className='flex w-100%' justify-center items-center>
      <div font-bold text-center>
        <h1 text-6xl>404</h1>
        <h2 text-4xl>Not Found</h2>
        <p text-2xl>Please check you URL.</p>
        <Button icon={<HomeOutlined />} onClick={Back}>Back Home</Button>
      </div>
    </div>
  )
}


export default NotFound