const express = require('express'),
      bodyParser = require('body-parser'),
      fs = require('fs');

const movies = require('./data/movies.json')

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (require,response) => response.send(`Server Working!`));
app.get('/movies', (require, response) => response.send(movies));   

app.post('/movies/', (require, response) => {
      const newMovie = require.body;
      if (newMovie) {
            movies.push(newMovie);
            fs.writeFile('texto.json', JSON.stringify(movies), err => console.log('An error has ocurred'));
      } else response.send('Error');
});

app.listen(port, () => console.log(`Server running an localhost:${port}`)); 