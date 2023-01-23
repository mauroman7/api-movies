const express = require('express');
const {getAllMovies, getIdMovies,getTitleMovies,getGenreMovies,getYearMovies, postMovies, putMovies, deleteMovies} = require('../controllers/movies.controller');
const router = express.Router();

router.get('/', getAllMovies)
//router.get('/year/:year', getMovies);
router.get('/year/:year', getYearMovies)
router.get('/genre/:genre', getGenreMovies)
router.get('/title/:title', getTitleMovies)
router.get('/:id', getIdMovies)
router.post('/', postMovies)
router.put('/:id', putMovies)
router.delete('/:id', deleteMovies)

module.exports = router;