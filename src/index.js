const api_key = 'GET-YOUR-KEY';
const form = document.getElementById('search');
const container = document.getElementById('albums-container');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const artist = document.getElementById("artist").value;
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${api_key}&format=json&limit=5`;
  container.innerHTML = "";
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.topalbums.album.forEach((album) => {
        container.insertAdjacentHTML("beforeend", albumDiv(album));
        console.log(album);
      });

    });
});

const albumDiv = (album) => {
  return `<div class="row m-t-1">
      <div class="col-xs-12">
        <img src="${album.image[2]['#text']}" class='pull-left m-r-1'>
        <h2>${album.name}</h2>
        <p>${album.artist.name}</p>
      </div>
    </div>`
};