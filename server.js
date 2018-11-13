const express = require('express'),
      bodyParser = require('body-parser');

//const writeDataOfMovies = require('./utils/writeDataOfMovies.js');
const moviesRouter = require('./api/movies/index.js'); 

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', (require,response) => response.send(`Server Working!`));

app.use('/movies', moviesRouter);   
// app.post('/movies', moviesRouter);

app.listen(port, () => console.log(`Server running an localhost:${port}`)); 