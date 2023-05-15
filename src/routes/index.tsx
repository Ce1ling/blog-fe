import React from 'react'
import { Navigate } from 'react-router-dom'

import type { RouteProps } from 'react-router-dom'

// 懒加载
const Blog = React.lazy(() => import('../pages/Blog'))
const BlogDetails = React.lazy(() => import('../pages/Blog/BlogDetails'))
const BlogCreate = React.lazy(() => import('../pages/Blog/BlogCreate'))
const Projects = React.lazy(() => import('../pages/Projects'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const routes: RouteProps[] = [
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/details',
    element: <BlogDetails />
  },
  {
    path: '/blog/create',
    element: <BlogCreate />
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