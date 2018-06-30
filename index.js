var SpotifyWebApi = require('spotify-web-api-node');
var spotifyInformation = require('./config.json');
var spotifyApi = new SpotifyWebApi({
    clientId: spotifyInformation.clientId,
    clientSecret: spotifyInformation.clientSecret,
    redirectUri: spotifyInformation.redirectUri
});
spotifyApi.setAccessToken(spotifyInformation.token);

let singerName = 'tarkan';

let getSingerPopularSongs = function () {
    spotifyApi.search(singerName, ['artist'], {limit: 5}).then(
        function (data) {
            let singerId = data.body.artists.items[0].id;
            console.log("artist image", data.body.artists.items[0].images[0].url);
            console.log(singerName, 'ID = ', singerId);
            spotifyApi.getArtistTopTracks(singerId, 'TR').then(
                function (data) {
                    for (var i = 0; i < 10; i++) {
                        var popularSongList = [];
                        popularSongList.push(data.body.tracks[i].preview_url);
                        console.log(popularSongList);
                        // console.log(singerName, ' Most Popular ' + i + ' Song = ', data.body.tracks[i].preview_url);
                    }
                    // console.log(singerName, ' Most Popular Song = ', data.body.tracks[0].preview_url);
                },
                function (err) {
                    console.log('Singer does not found!!');
                    console.error(err);
                });
        },
        function (err) {
            console.log('Singer does not found!!');
            console.error(err);
        });
}
getSingerPopularSongs();

