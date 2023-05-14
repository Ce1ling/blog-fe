import React from 'react'
import { Spin } from 'antd'


const Loading: React.FC = () => {
  return (
    <div>
      <Spin tip="Loading" size="large" m-y-20>
        <div />
      </Spin>
    </div>
  )
}


export default Loading