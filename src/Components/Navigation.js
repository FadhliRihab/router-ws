import React from 'react'
import { Link } from 'react-router-dom';
import img from "../Assets/Popcorn.png"
import "./About.css";

const Navigation = () => {
  return (
    <div>
      <div className="topnav">
        <img className='logo' src={img} alt="404"></img>
        <Link className="active" to="/Home">Home</Link>
        <Link to="/MovieList">Movie</Link> 
    
        <div className='newslatter'>
          <form>
            <input type="text" placeholder='Search'/>
            <input type="button" value="Search"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Navigation
