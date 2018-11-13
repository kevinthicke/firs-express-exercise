const express = require('express'),
      bodyParser = require('body-parser');

const writeDataOfMovies = require('./utils/writeDataOfMovies.js');

const moviesPath = './data/movies.json';
const movies = require(moviesPath);

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (require,response) => response.send(`Server Working!`));
app.get('/movies', (require, response) => response.send(movies));   

app.post('/movies/', (require, response) => {
      const newMovie = require.body;
      const newMovieAlredyExists = movies.find(movie => movie.name === newMovie.name);
      if (newMovieAlredyExists) {
            response.send(`Error: The movie ${newMovie.name} alredy exists`);
      } else { 
            movies.push(newMovie);
            writeDataOfMovies(moviesPath, movies);
      }
});

app.listen(port, () => console.log(`Server running an localhost:${port}`)); 