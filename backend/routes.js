const app = require('./index')
const ax = require('axios')

app.get('/places', function (req, res) {
    console.log("here")
    ax.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=35.6590242,139.7217861&radius=5000&key=AIzaSyAn19RJD6FC5aLwzr0AbsmzP4rmQjoJENU&type=restaurant')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

});
