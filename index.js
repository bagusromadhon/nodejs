//import modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


app.use(bodyParser.urlencoded({extended:false}))
// data seng dikirim dalam bentuk json 
app.use(bodyParser.json());

routes(app);

// run server
app.listen(3000,()=>{
    console.log("Server Berjalan Di Port 3000")
})
