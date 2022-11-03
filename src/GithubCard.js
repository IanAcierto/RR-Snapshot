import React from 'react'
import Card from "react-bootstrap/Card"
const GithubCard = () => {
  return (
    <div>
      <Card style = {{width: "18rem"}}>
        <Card.Img variant = "top" src="https://upload.wikimedia.org/wikipedia/en/c/c2/Peter_Griffin.png"/>
        <Card.Body>
          <Card.Title>IanAcierto</Card.Title>
          <Card.Text>I am taking a fullstack web development course</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GithubCard