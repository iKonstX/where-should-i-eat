require('dotenv').config()

const ax = require('axios')
const express = require('express');
const app = express();

app.get('/places', function (req, res) {
    ax.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6590242,139.7217861&radius=5000&key=${process.env.GMAP_API_KEY}&type=restaurant`)
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