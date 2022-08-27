import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { INTIAL_MOVIE_LIST } from "./App";
import { API } from "./global"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export function MovieList() {

  const [movieList, setMovieList] = useState([]);

const getMovies =() =>{
  fetch(`${API}/movie`,{
    method: "GET",
  })
  .then((data) => data.json())
  .then((mvs) => setMovieList(mvs))
}

   
  useEffect(() => getMovies(),[])

  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id} 
          deleteButton={
            <IconButton onClick={() =>
              {    
                //Deleting -> Refresh data   
                  fetch(`${API}/movie/${mv.id}`, {
                    method: "DELETE",})
                    .then(() => getMovies());    
                
              }
              }>
          <DeleteIcon />
        </IconButton>
          } 
          
          
          
          />
        ))}

      </div>
    </div>


  );
}
