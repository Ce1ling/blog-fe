import React from 'react'
import { Layout, Button } from 'antd'

const { Footer: AntFooter } = Layout

const Footer: React.FC = () => {


  return (
    <AntFooter className='bg-#dddddd' text-center>
      Mini Blog ©{new Date().getFullYear()} 
      <Button type="link" href='https://github.com/Ce1ling' target='_blank'>
        L1en
      </Button>
    </AntFooter>
  )
}


export default Footer