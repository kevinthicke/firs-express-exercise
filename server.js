const express = require('express'),
      bodyParser = require('body-parser');

const movies = require('./data/movies.json')

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (require,response) => response.send(`Server Working!`));
app.get('/movies', (require, response) => response.send(movies));   
app.post('/movies/', (require, response) => {
      const newMovie = require.body;
      if (newMovie) {
            response.send(newMovie);
            movies.push(newMovie);
      } else response.send('Error');
});

app.listen(port, () => console.log(`Server running an localhost:${port}`)); 