const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');


dotenv.config();

const app = express();


//import routs
const postRoute = require('./routes/routePosts');
const nonpostRoute = require('./routes/nonroutePosts ');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoute);
app.use(nonpostRoute);

// const PORT = 8000;

// const dbUrl = 'mongodb+srv://crud_01:newcrud@mernapp.3cvvu.mongodb.net/mernCrud?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>{
    console.log("DataBase Connected");
})
.catch((err) =>console.log("Database connection error",err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})