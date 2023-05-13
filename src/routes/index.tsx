import React from 'react'
import { Navigate } from 'react-router-dom'

// 懒加载
const Home = React.lazy(() => import('../pages/Home'))
const About = React.lazy(() => import('../pages/About'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

interface Route {
  path: string
  name?: string
  element: React.ReactNode
  children?: Route[]
}

const routes: Route[] = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes