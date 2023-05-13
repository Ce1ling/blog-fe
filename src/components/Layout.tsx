import React from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import routes from '../routes/index'
import Header from './Header'
import Footer from './Footer'
import Loading from './Loading'
import { Button } from 'antd'


const Layout = () => {
  const navigate = useNavigate()
  const elements = useRoutes(routes)

  return (<div m-x-100 m-y-10>
    <Header />
    <Button onClick={() => navigate('/home')}>home</Button>
    <Button onClick={() => navigate('/about')}>about</Button>
    <Button onClick={() => navigate('/not')}>not found</Button>
    <React.Suspense fallback={<Loading />}>
      {elements}
    </React.Suspense>
    <Footer />
  </div>)
}


export default Layout