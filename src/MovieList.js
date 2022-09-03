import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { INTIAL_MOVIE_LIST } from "./App";
import { API } from "./global"
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export function MovieList() {

  const [movieList, setMovieList] = useState([]);

const getMovies =() =>{
  fetch(`${API}/movies`,{
    method: "GET",
  })
  .then((data) => data.json())
  .then((mvs) => setMovieList(mvs))
}

   
  useEffect(() => getMovies(),[])

  const navigate = useNavigate();



  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={mv.id} movie={mv} id={mv.id} 
          deleteButton={
            <IconButton 
            color ="error"
            onClick={() =>
              {    
                //Deleting -> Refresh data   
                  fetch(`${API}/movies/${mv.id}`, {
                    method: "DELETE",})
                    .then(() => getMovies());    
                
              }
              }>
          <DeleteIcon />
        </IconButton>
          } 
          //edit button

          editButton={
            <IconButton 
            color ="success"
            onClick={() =>  navigate(`/movie/edit/${mv.id}`)         
              }>
          <EditIcon />
        </IconButton>
          } 
          
          
          />
        ))}

      </div>
    </div>


  );
}
