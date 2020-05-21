/* eslint-disable no-console */
import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();

spotifyApi.setAccessToken('addSecret');

const heading = document.querySelector('#currentSong');

spotifyApi.getMyCurrentPlayingTrack({ market: 'US' }).then(
  (data) => {
    const artist = data.item.artists[0].name;
    const album = data.item.album.name;
    console.log(data);
    console.log(`You're listening to ${artist}: ${album}`);
    heading.innerHTML = `You're listening to ${artist}: ${album}`;
  },
  (err) => {
    console.log(err);
  },
);

const topArtists = document.querySelector('#topArtists');

spotifyApi.getMyTopArtists({ time_range: 'short_term', limit: 5 }).then(
  (data) => {
    console.log('Your top artists are: ', data);
    for (let i = 0; i < data.items.length; i += 1) {
      console.log(data.items[i].name);
      const newLi = document.createElement('li');
      const newBand = document.createTextNode(data.items[i].name);
      newLi.appendChild(newBand);
      topArtists.appendChild(newLi);
    }
  },
  (err) => {
    console.log(err);
  },
);
