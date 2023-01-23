const Movies = require('../models/movies.model')

const getAllMovies = async(req, res) => {
    try {
        const myMovies = await Movies.find();
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getIdMovies = async(req, res) => {
    try {
        const {id} = req.params; 
        const myMovies = await Movies.findById(id);
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getTitleMovies = async (req, res) => {
    //console.log("hola");
    try {
        const {title} = req.params;    // es igual a const id = req.params.id
        const myMovies = await Movies.find({ "title" : { $regex : RegExp(`^${title}$` , 'i')}});
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
};

const  getGenreMovies = async (req, res) => {
    //console.log("hola");
    try {
        const {genre} = req.params;    // es igual a const id = req.params.id
        const myMovies = await Movies.find({ "genre" : { $regex : RegExp(`^${genre}$` , 'i')}});
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
};


const  getYearMovies = async (req, res) => {
    try {
        const {year} = req.params;
        if (year >= 2010) {
            console.log('year 2010');
        }
        else{
            return res.status(400).send('no movies before 2010');
        }
        const myMovies = await Movies.find({year: { $gte: year }}); //es numerico
        return res.status(200).json(myMovies);
    } catch (error) {
        console.log('error');
        return res.status(500).json(error);
    }

};

const postMovies = async (req, res) => {
    try {
        const newMovie = new Movies(req.body)
        const createdMovie = await newMovie.save();
        return res.status(201).json(createdMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
}; 

const putMovies = async (req, res) => {
    try {
        const {id} = req.params;
        const putMovies = new Movies(req.body);
        putMovies._id = id;

        const updatedMovie = await Movie.findByIdAndUpdate(id, putMovies, {new: true}); //ponemos el new:true para que nos devuelva el nuevo objeto y no el que ha actualizado.
        return res.status(200).json(updatedMovie);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteMovies = async(req, res) => {
    try {
        const id = req.params.id;
        const myMovies = await Movie.findByIdAndDelete(id);
        return res.status(200).json(myMovies)
    } catch (error) {
        return res.status(500).json(error);
    }
}; 

module.exports = {getAllMovies, getIdMovies, getTitleMovies,getGenreMovies,getYearMovies, postMovies, putMovies, deleteMovies}