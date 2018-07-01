var singerList = require('./turkcePop.json');
// var singerList = require('./globalPop.json');
// var singerList = require('./globalRock.json');
var spotify = require('./spotifyService.js');

spotify.artistName = singerList.turkcePop.forEach(function (artistName){
    searchArtist(artistName);
})
