import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const NotFound: React.FC = () => {
  const navigate = useNavigate()  

  return (
    <div className='flex w-100%' justify-center items-center>
      <div font-bold text-center>
        <h1 text-6xl>404</h1>
        <h2 text-4xl>Not Found</h2>
        <p text-2xl>Please check you URL.</p>
        <Button onClick={() => navigate('/')}>Back Home</Button>
      </div>
    </div>
  )
}


export default NotFound