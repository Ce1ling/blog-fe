import React from 'react'
import Layout from './components/Layout.tsx'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'


const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Layout />
    </ConfigProvider>
  )
}

export default App