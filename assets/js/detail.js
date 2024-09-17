const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getData = async () => {
  try {
    const id = urlParams.get("id");

    const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const json = await response.json();

    const title = json.name || 'Title Not Available';
    const imageSrc = json.image ? json.image.original : '/assets/images/placeholder.jpg'; 
    const summary = json.summary || 'No summary available.';
    const rating = json.rating.average || 'N/A';
    const language = json.language || 'N/A';
    const genres = json.genres.length > 0 ? json.genres.join(', ') : 'No genres available';
    const status = json.status || 'N/A';
    const premiered = json.premiered || 'N/A';
    const ended=json.ended || 'N/A';

    const output = document.querySelector(".detailSec");

    output.innerHTML = `
    
      <div class="detailImg">
        <h2>${title}</h2>
        <img src="${imageSrc}" alt="${title}" style="width: 270px; height: 380px;">
      </div>
      <div class="descrp">
        <h4>Summary:</h4>
        <p>${summary}</p>
        <hr>
        <span>Rating: ${rating} </span><i class="fa-solid fa-star"></i>
        <hr>
        <p>Language: ${language}</p>
        <hr>
        <p>Genres: ${genres}</p>
        <hr>
        <p>Status: ${status}</p>
        <hr>
        <p>Premiered: ${premiered}</p>
        <hr>
        <p>Ended: ${ended}</p>
      </div>
    `;

    console.log(json);
  } catch (e) {
    console.error(e);
    window.location.href = "error.html";
  }
};

getData();
