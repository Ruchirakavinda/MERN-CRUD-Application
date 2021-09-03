const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');

const app = express();


//import routs
const postRoute = require('./routes/routePosts');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(postRoute);

const PORT = 8000;

const dbUrl = 'mongodb+srv://crud_01:newcrud@mernapp.3cvvu.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
.then(()=>{
    console.log("DataBase Connected");
})
.catch((err) =>console.log("Database connectiin error",err));
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})