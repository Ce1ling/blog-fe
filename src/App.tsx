import React from 'react'
import Layout from './components/Layout.tsx'
import { message } from 'antd'

import type { MessageInstance } from 'antd/es/message/interface.d.ts'


export const AppContext = React.createContext<MessageInstance | null>(null)

const App: React.FC = () => {
  const [messageApi, messageHolder] = message.useMessage()

  return (
    <AppContext.Provider value={messageApi}>
      {messageHolder}
      <Layout />
    </AppContext.Provider>
  )
}

export default App