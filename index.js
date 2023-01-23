const express = require('express');
const dotenv = require('dotenv');
const moviesRouter = require('./src/api/routes/movies.routes');
const app = express();

dotenv.config();
const {connect} = require('./src/utils/database');
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/movies', moviesRouter)
app.listen(5000, () => console.log('listening on port 5000'));