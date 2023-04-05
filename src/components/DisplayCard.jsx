import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function DisplayCard({data}) {
  return (
    <>
     <Col sm={12} md={6} lg={4} xl={3}>

 <Link style={{textDecoration:"none"}} to={`view/${data.id}`}>
  <Card className='mt-4 text-center   ' style={{ width: '100%',height:'100%' }}>
    <Card.Body>
      <Card.Title className='a1'>{data.title}</Card.Title>
      <Card.Text>
       {data.body}
      </Card.Text>
     
    </Card.Body>
  </Card>
  </Link>
  </Col >
  
  </>
  )
}

export default DisplayCard