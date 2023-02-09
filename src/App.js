import Navigation from './Components/Navigation';
import About from './Components/About';
import { moviesData } from './Assets/data';
import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie';
import {Route,Routes} from "react-router-dom"
import MovieTrailer from './Components/MovieTrailer';

import PrivateRoute from './Components/PrivateRoute';

function App() {
 const [search, setSearch] = useState("");
 const [value, setValue] = useState(0);
 console.log(value)
 const [clique ]=useState(false)
  return (
    <div className="App">
      <Navigation setSearch={setSearch}  setValue={ setValue} />
      
      <Routes>
      <Route path='/About' element={<About />}/>
      <Route path='/Movies' element={
        <PrivateRoute clique={clique} >
        <AddMovie data={moviesData} search={search} value={value}/>
        </PrivateRoute> } />
      <Route  path="/Trailer/:id" element={<MovieTrailer data={moviesData}/>} />
      </Routes>
    </div>
  );
}

export default App;
