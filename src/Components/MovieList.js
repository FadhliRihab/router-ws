import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'




const MovieList = () => {
    const data=useSelector((state)=>state.movies)
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "220px",
        marginLeft:"2%",
        backgroundColor:"#1b273f"
      }}>
       
       {data.map((el)=>
        <div>
        <MovieCard  key={el.id} el={el}  />
        
        </div>
        
       
            
)}
    </div>
  )
}

export default MovieList