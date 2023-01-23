const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const moviesSchema = new Schema(
    {
        title: {type: 'string', required: true},
        director: {type: 'string'},
        year: {type: 'number'},
        genre: {type: 'string'}   
    },{
        timestamps: true
    }
)


const Movie = mongoose.model('movie', moviesSchema);

module.exports = Movie;