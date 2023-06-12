
import React, {useState, useEffect} from 'react';
import {getMovies} from '../api/api-movies'

const Movies = ()=>{
    let [moviesData, setMoviesData] = useState([])

    useEffect(() => {
        getMovies()
        .then(data => setMoviesData(data.data))
      },[])
    return (
        <>
                <div className="row">
                    <h1>Movies Details : </h1>
                </div>
     
            <div className="row">
                {
                    moviesData.map(({imdbID,Title,Released,imdbRating,Images})=>{
                    
                        return (  <div className="col-sm-3" key={imdbID}>
                            <div className="card">
                            <img className="card-img-top" src={Images[0] || ''} alt={Title} />
                                <div className="card-body">
                                    <h5 className="card-title">Name : {Title}</h5>
                                    <p className="card-text">Released Date : {Released}</p>
                                    <p className="card-text">Reating : {imdbRating} Star</p>
                                </div>
                            </div>
                        </div>)
                    })
                }
            </div>
            </>
    )
}

export default Movies;