const express = require('express');

const router = express.Router();

const moviesPath = './../../data/movies.json';
const movies = require(moviesPath);
const writeDataOfMovies = require('./../../utils/writeDataOfMovies.js');

router.get('/', (require, response) => response.send(movies));

router.post('/', (require, response) => {
      const newMovie = require.body;
      const newMovieAlredyExists = movies.find(movie => movie.name === newMovie.name);
      
      if (newMovieAlredyExists) {
            response.send(`Error: The movie ${newMovie.name} alredy exists`);
      } else { 
            movies.push(newMovie);
            writeDataOfMovies(moviesPath, movies);
      }
});

module.exports = router;