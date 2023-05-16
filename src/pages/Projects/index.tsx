import React, { useEffect, useState } from 'react'
import { Row, Col,Card, Button, message, Popover, Empty } from 'antd'
import { LinkOutlined, HomeOutlined, EllipsisOutlined } from '@ant-design/icons'
import { api } from './api'

import type { ReposResponse } from './api'

const Projects: React.FC = () => {

  const [repos, setRepos] = useState<ReposResponse[]>()

  const getRepos = async () => {
    try {
      const res = await api.getRepos({ type: 'all', sort: 'pushed' })
      setRepos(res)
    } catch (err) {
      throw new Error(err as string)
    }
  }
  const hoempage = (repo: ReposResponse) => {
    return () => {
      if (repo.homepage?.trim()) {
        window.open(repo.homepage)
        return
      }
      message.warning(`项目 "${repo.name}" 没有部署上线`)
    }
  }
  const more = () => {
    message.info('敬请期待...')
  }

  useEffect(() => {
    getRepos()
  }, [])

  return (
    <Card title="My Repos" shadow-lg>
      <Row gutter={[40, 40]} className={repos ? '' : 'justify-center'}>
        {repos ? repos.map(repo => (
          <Col span={8} key={repo.id}>
            <Card title={repo.name} hoverable shadow-md
              actions={[
                <Popover placement='bottom' content="项目地址">
                  <Button type="link" href={repo.html_url} target='_blank' p-0>
                    <LinkOutlined />
                  </Button>
                </Popover>,
                <Popover placement='bottom' content="项目主页">
                  <HomeOutlined onClick={hoempage(repo)} select-none />
                </Popover>,
                <EllipsisOutlined select-none onClick={more} />
              ]}>
              {repo.description?.trim() || <span text-gray>"该项目没有描述"</span>}
            </Card>
          </Col>)) : <Empty m-y-20 description="无数据" />}
      </Row>
    </Card>
  )
}


export default Projects