
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => {
    console.log("Connection open")
})
.catch(err => {
    console.log("Oh no error")
    console.log(err)
})

const movieSchema = new mongoose.Schema ({
    title:String,
    year:Number,
    score:Number,
    rating:String 
});

const Movie = mongoose.model('Movie', movieSchema);

Movie.insertMany([
    {title:'Amadeus',year:1986, score:9.2, rating:2.5},
    {title:'Alien',year:1986, score:9.2, rating:2.5},
    {title:'Rembo',year:1986, score:9.2, rating:2.5},
    {title:'Terminator',year:1986, score:9.2, rating:2.5}
]).then(data => {
    console.log("IT worked")
    console.log(data);
})