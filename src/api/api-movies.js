// import React from 'react';
const API_URL='http://localhost:3002';

export const getMovies = ()=>{
    return fetch(`${API_URL}/movies`).then(response => response.json());
}