import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

function View() {
  const params=useParams()
  // console.log(params);
    const[Book,setBook]=useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
        // console.log(res);
        setBook(res.data)
      })

    useEffect(()=>{
      
    },[])
    // console.log(Book);
    const restdata= Book.find(item=>item.id==params.id)
 
console.log(restdata);
  return (
    <>
    { restdata ? (
        <Row>
           <Col>
           <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{restdata.title}</Card.Title>
        <Card.Text className='mt-5'>
         {restdata.body}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
           </Col>
        </Row>

      ) : 'null'}
    </>
  )
}

export default View