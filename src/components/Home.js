import React from 'react'
import { Col, Row } from 'antd';
import Navbar from '../components/Navbar';

function Home() {
  return (
<>
<Row>
      <Col span={12}>Logo</Col>
      <Col span={12}><Navbar/></Col>
    </Row>

</>
    )
}

export default Home