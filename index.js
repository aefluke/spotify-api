var config = require('./config.json');
var artist = new Object();
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

spotifyApi.setAccessToken(config.accessToken);

spotifyApi.searchArtists('Tarkan')
    .then(function(data) {
        artist = data.body.artists.items[0];
        getTopTracks(artist.id);
    }, function(err) {
        console.error(err);
    });

function getTopTracks(id){
    artist.tracks = [];
    spotifyApi.getArtistTopTracks(id, 'TR')
        .then(function(data) {
            data.body.tracks.forEach(function(track) {
                artist.tracks.push(track);
                finish();
            });
        }, function(err) {
            console.log('Something went wrong!', err);
        });
}

function finish(){
    console.log(artist);
}