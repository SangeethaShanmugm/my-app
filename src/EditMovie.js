import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global"
import { useParams } from "react-router-dom";


export function EditMovie() {
 
    const { id } = useParams();  
    const [movie, setMovie] = useState(null)
  
    useEffect(() => {
      fetch(`${API}/movie/${id}`, {
        method: "GET",
      })
      .then((data) => data.json())
      .then((mv) => setMovie(mv))
    }, [])
  

  

  const navigate = useNavigate();


  return movie ? <EditMovieForm movie={movie}/> : "Loading....";
   
 

}



function EditMovieForm( { movie } ){

  
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
   
  const navigate = useNavigate();


 return(
  <div className="add-movie-form">

        <TextField value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="standard" />
        <TextField value={poster} onChange={(e) => setPoster(e.target.value)} label="Poster" variant="standard" />
        <TextField value={rating} onChange={(e) => setRating(e.target.value)} label="Rating" variant="standard" />
        <TextField value={summary} onChange={(e) => setSummary(e.target.value)} label="Summary" variant="standard" />
        <TextField value={trailer} onChange={(e) => setTrailer(e.target.value)} label="Trailer" variant="standard" />

        <Button variant="contained"
          //copy the MovieList and add newMovie to it
          onClick={() => {
            const updateMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
           
            // setMovieList([...movieList, newMovie]);
            // 1. method - POST
            // 2. body - data -JSON
            // 3. Headers -JSON
             
            fetch(`${API}/movie/${movie.id}`,{
              method: "PUT",
              body: JSON.stringify(updateMovie),
              headers: {
                "Content-Type": "application/json",
              }
            })
            .then((data) => data.json())
            .then(() => navigate("/movie"))
             //Currently post and navigate is immediately 
             // When post is complete -> navigate /movie
            
          }}
        >SAVE</Button>


      </div>

 )

}