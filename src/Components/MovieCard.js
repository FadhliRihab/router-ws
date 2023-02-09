import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Delete_Movie } from '../redux/action/movieAction';
import RatingStar from './RatingStar';


const MovieCard = ({el}) => {
    const dispatch=useDispatch();

  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
            {el.description}
        </Card.Text>
        <RatingStar el={el}/>
        <Button className='btn' variant="primary">{el.type}</Button>
        <Button onClick={()=>dispatch(Delete_Movie(el.id))}>DELETE</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard
