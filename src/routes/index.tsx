import React from 'react'
import { Navigate } from 'react-router-dom'

// 懒加载
const Blog = React.lazy(() => import('../pages/Blog'))
const Projects = React.lazy(() => import('../pages/Projects'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

interface Route {
  path: string
  name?: string
  element: React.ReactNode
  children?: Route[]
}

const routes: Route[] = [
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/',
    element: <Navigate to='/blog' />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes