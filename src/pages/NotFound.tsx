import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const NotFound: React.FC = () => {
  const navigate = useNavigate()  

  return (
    <div font-bold text-center>
      <h1 text-6xl>404</h1>
      <p text-4xl>Not Found</p>
      <Button onClick={() => navigate('/')}>Back Home</Button>
    </div>
  )
}


export default NotFound