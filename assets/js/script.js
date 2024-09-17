const getData = async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    return response.data;
  } catch (error) {
    console.error("Error fetching show data using axios:", error);
  }
};

const renderList = (data, page) => {
  const list = document.querySelector(".poster-grid");
  for (let i = (page - 1) * 5; i < page * 5; i++) {
    if (i >= data.length) break;
    const element = data[i];
    list.innerHTML += `
      <div class="poster-item">
        <a href="details.html?id=${element.id}">
          <img src="${element.image.original}" alt="Movie Poster">
          <div class="poster-info">
            <h5>${element.name}</h5>
            <span>${element.rating.average || "N/A"}</span> <span></span><i class="fa-solid fa-star"></i>
            <p>${element.network?.country?.name || "N/A"}</p>
          </div>
        </a>
      </div>
    `;
  }
};

const data = await getData();
let currentPage = 1;

renderList(data, currentPage);

const loadMoreButton = document.querySelector(".load-more");

loadMoreButton.addEventListener("click", function () {
  currentPage++;
  renderList(data, currentPage);
});
