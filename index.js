require('dotenv').config()

const ax = require('axios')
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/where-should-i-eat'));

app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/where-should-i-eat/index.html'));
});

app.get('/places', function (req, res) {
    const filters = { ...req.query };
    ax.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6580358,139.7275711&radius=5000&type=restaurant&key=${process.env.GMAP_API_KEY}`,
        {
            params: {
                ...filters
            }
        })
        .then((response) => {
            res.json(response.data.results)
        })
        .catch(function (error) {
            console.log(error);
        });

});

app.listen(process.env.PORT, function () {
    console.log('Example app listening on port ',
        process.env.PORT);
});

module.exports = app;