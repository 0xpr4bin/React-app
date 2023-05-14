import React ,{useState,useEffect}from 'react'
import { NavLink, useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { API_URL } from './context';
import '../../App.css'

const SingleMovie = () => {
    const { id } = useParams();

    const [isLoading, setIsLoading ] = useState(true);
    const [movie, setMovie] = useState('');
     
    const handleBookNowClick = () => {
      window.location.href = 'http://127.0.0.1:8000/api/payment/';
    };

    const getMovies = async(url) =>{
        try{
            const res =  await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response==="True"){
                setIsLoading(false);
                setMovie(data);
            }
          }
            catch(error){
            console.log(error);
        }

    }

    useEffect(()=>{
        let timerout = setTimeout(()=>{
            getMovies(`${API_URL}&i=${id}`);
        },500)
        return ()=>clearTimeout(timerout);
    },[id]);
    if (isLoading){
      return(
        <div className='movie-section'>
          <div className='loading'>
            Loading
          </div>

        </div>
      );
    }
  return (
   
    <section className='movie-section'>
      <div className='movie-card'>
      <figure>
        <img src={movie.Poster}/>
      </figure>
      <div className='card-content'>
        <p className='title'>{movie.Title}</p>
        <p className='card-text'>{movie.Released}</p>
        <p className='card-text'>{movie.Genre}</p>
        <p className='card-text'>{movie.imdbRating} / 10</p>
        <p className='card-text'>{movie.Country}</p>
        <button className='back-btn' onClick={handleBookNowClick}>
            Book Now
          </button>

      </div>
      </div></section>

    
  )
}

export default SingleMovie;
