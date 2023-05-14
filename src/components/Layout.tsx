import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { Layout as AntLayout } from 'antd'


const Layout: React.FC = () => {
  return (
    <AntLayout className='min-h-100%'>
      <Header />
      <Content />
      <Footer />
    </AntLayout>
  )
}


export default Layout