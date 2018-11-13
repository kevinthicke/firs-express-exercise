const fs = require('fs');

const writeDataOfMovies = (moviesPath, movies) => {
    fs.writeFileSync(moviesPath, JSON.stringify(movies), err => {
        if (err) console.log('Error!');
        else console.log(`File ${moviesPath} has been written successfully`);
    });
}

module.exports = writeDataOfMovies;