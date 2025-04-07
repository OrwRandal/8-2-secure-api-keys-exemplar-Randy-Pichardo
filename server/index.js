//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
require("dotenv").config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToDistFolder = path.join(__dirname, '../frontend/dist');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////

const serveStatic = express.static(pathToDistFolder);

app.use(serveStatic);
app.get("/api/gifs", async (req, res) => {
    try{
        // I got the API key from the .env file using dotenv
        // This keeps the key private and prevents putting it directly in the code
        const API_KEY = process.env.API_KEY;
        // I got the 'search' query parameter from the request
        // If the user searched for something, it will be stored in 'search'
        const {search} = req.query
        // If 'search' is empty, I fetch trending GIFs
        // Otherwise, I fetch GIFs based on the user's search term
        // Both URLs include the API key from the environment variable for security
        const url = search? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&rating=g`: `https://api.giphy.com/v1/gifs/trending?limit=3&rating=g&api_key=${API_KEY}`
        const response = await fetch(url);
        const data = await response.json();
        res.send(data);
    } catch(error) {
        res.status(503).send(error)
    }
})

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 