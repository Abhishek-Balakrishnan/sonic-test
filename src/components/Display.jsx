import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisplayCard from './DisplayCard';
const Display = () => {

    
  
    const[Book,setBook]=useState([])
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
      console.log(res);
      setBook(res.data)
    })
    useEffect(()=>{
     
    },[])
  return (

    
    <Row>
    {
      Book.map(item => (
        <DisplayCard data={item} />
      ))
    }
  </Row>
  )
      
}

export default Display