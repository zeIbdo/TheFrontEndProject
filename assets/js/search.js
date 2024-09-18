let data = [];

const getData = async () => {
    try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        data = response.data;
    } catch (error) {
        console.error("Error fetching show data using axios:", error);
    }
};

getData();

const searchSw = function () {
    const list = document.querySelector(".poster-grid");
    const searchEl = document.querySelector(".sks").value.toLowerCase();
    
    list.innerHTML = "";
    
    if (searchEl.trim() === "") {
        list.innerHTML = `<div class="kokoCom">"<img src="/assets/images/pgg.png" class="koko" alt="Placeholder Image"><h4>Sorry, no results were found. Check your spelling or try searching for something else.</h4>
        </div>`;
    } else {
        const filteredData = data.filter(element =>
            element.name.toLowerCase().includes(searchEl)|| element.name.toLowerCase().endsWith(searchEl)
        );
        
        if (filteredData.length > 0) {
            filteredData.forEach(element => {
                list.innerHTML += `
                    <div class="poster-item">
                        <a href="details.html?id=${element.id}">
                            <img src="${element.image?.original || 'path/to/placeholder.jpg'}" alt="Movie Poster">
                            <div class="poster-info">
                                <h5>${element.name}</h5>
                                <span>${element.rating.average || "N/A"}</span><i class="fa-solid fa-star"></i>
                                <p>${element.network?.country?.name || "N/A"}</p>
                            </div>
                        </a>
                    </div>
                `;
            });
        } else {
            list.innerHTML = `<div class="kokoCom">"<img src="/assets/images/pgg.png" class="koko" alt="Placeholder Image"><h4>Sorry, no results were found. Check your spelling or try searching for something else.</h4>
            </div>`;
        }
    }
};

document.querySelector(".sks").addEventListener("input", function () {
    searchSw();
});
document.getElementById('clearBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    searchInput.focus();
});
