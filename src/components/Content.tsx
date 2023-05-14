import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '../routes/index'
import Loading from './Loading'
import { Layout } from 'antd'

const { Content: AntContent } = Layout

const Content: React.FC = () => {
  const elements = useRoutes(routes)

  return (
    <AntContent p-10 flex-1>
      <React.Suspense fallback={<Loading />}>
        {elements}
      </React.Suspense>
    </AntContent>
  )
}


export default Content