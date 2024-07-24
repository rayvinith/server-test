// // step1: crreate som einitial movies 
// // handle submit button by targeting the form 
// // make a function that will retreive data from storage annd parse it 
// // also reset the form after the data is parsed 


// // a array initialMovies that contains objects representing movies with their details (name, release date, poster URL, IMDb rating).
//   // const initialMovies = [
//   //     { name: "Inception", releaseDate: "2010-07-16", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.8 },
//   //     { name: "The Dark Knight", releaseDate: "2008-07-18", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 9.0 },
//   //     { name: "Interstellar", releaseDate: "2014-11-07", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.6 },
//   //     { name: "Parasite", releaseDate: "2019-05-30", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.6 },
//   //     { name: "Avengers: Endgame", releaseDate: "2019-04-26", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.4 },
//   //     { name: "The Matrix", releaseDate: "1999-03-31", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.7 },
//   //     { name: "Pulp Fiction", releaseDate: "1994-10-14", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.9 },
//   //     { name: "Forrest Gump", releaseDate: "1994-07-06", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 8.8 },
//   //     { name: "The Shawshank Redemption", releaseDate: "1994-09-22", posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gx_wAfGjWBDuLmFxaJQjYF5-6ZL6XdAX1Q&s", imdbRating: 9.3 }
//   //   ];



// document.getElementById('movieForm').addEventListener('submit', function(e) {
//     // prevent default helps us from auto submission when our website loads first
//     e.preventDefault();
//     // then we are targetiing our form and storing it in a variable
  
//     const name = document.getElementById('name').value;
//     const releaseDate = document.getElementById('releaseDate').value;
//     const posterURL = document.getElementById('posterURL').value;
//     const imdbRating = parseFloat(document.getElementById('imdbRating').value);
  
//     // in a new single variable we are storing our all elements value  
//     const newMovie = { name, releaseDate, posterURL, imdbRating };
// //   then we are parsing it so that we can perform operation on it 
//     let movies = JSON.parse(localStorage.getItem('movies')) || [];
//     movies.push(newMovie);
//     // then we are storing our updated array back into local storage. The JSON.stringify() function converts our JavaScript object into a JSON string. 
//     // Then localStorage.setItem() stores the string in the specified storage area which is our localstorage of chrome for now 
  
//     localStorage.setItem('movies', JSON.stringify(movies));
//     // after the movie is store with help of alert function we are displaying a message to the user
  
//     alert('Movie added successfully!');
    
//     // after successful addition we are clearing the form fields by using reset() method. so that the user can again fill new movie details
//     document.getElementById('movieForm').reset();
  
//     // after that we are calling our functioin rendermovies
//     renderMovies();
//   });
  

  
//   if (!localStorage.getItem('movies')) {
//     localStorage.setItem('movies', JSON.stringify(initialMovies));
//   }
  
//   function renderMovies() {
//     // this function first target our movielist which will conatin our
//     //  movie and after that we will retrieve data from loacal storaget using set method 
//     const moviesList = document.getElementById('moviesList');
//     const movies = JSON.parse(localStorage.getItem('movies')) || [];
  
// //    after that we will display each movie with help of form forEach method inside it we will create a div elememnt 
// // which will have our card content  and then we will append it 
  
//     movies.forEach((movie, index) => {
//       const movieDiv = document.createElement('div');
//       movieDiv.className = 'movie';
  
//       const movieDetails = `
      
// <div class="card">
//       <img src="${movie.posterURL}"  class="card-img-top" alt="${movie.name} poster" >
// <div class="card-body">
//       <h5 class="card-title">${movie.name}</h5>
//       <p class="card-text">Release Date: ${movie.releaseDate}</p>
// </div>
//     <div class="card-footer">
//       <small class="text-muted">IMDb Rating: ${movie.imdbRating}</small>
//     </div>
//   </div>
  
//       `;
  
//       movieDiv.innerHTML = movieDetails;
//       moviesList.appendChild(movieDiv);
//     });
//   }
  

//   // Adding initial movies
 

//   // Initial render of movies
//   renderMovies();
  
const API_URL = "https://jsday2-rayviniths-projects.vercel.app/initialMovies";

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
  document
    .getElementById("movieForm")
    .addEventListener("submit", addMovie);
  document.getElementById("sort").addEventListener("change", fetchMovies);
  document
    .getElementById("filterDate")
    .addEventListener("input", fetchMovies);
});

async function fetchMovies() {
  const response = await fetch(API_URL);
  let movies = await response.json();

  const sortBy = document.getElementById("sort").value;
  const filterDate = document.getElementById("filterDate").value;

  if (sortBy === "imdbRating") {
    movies.sort((a, b) => b.imdbRating - a.imdbRating);
  } else if (sortBy === "releaseDate") {
    movies.sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
  }

  if (filterDate) {
    movies = movies.filter(
      (movie) => new Date(movie.releaseDate) > new Date("2021-01-01")
    );
  }

  renderMovies(movies);
}

async function addMovie(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const releaseDate = document.getElementById("releaseDate").value;
  const posterURL = document.getElementById("posterURL").value;
  const imdbRating = parseFloat(
    document.getElementById("imdbRating").value
  );

  const newMovie = { name, releaseDate, posterURL, imdbRating };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie),
  });

  if (response.ok) {
    document.getElementById("movieForm").reset();
    fetchMovies();
  }
}

function renderMovies(movies) {
  const moviesList = document.getElementById("moviesList");
  moviesList.innerHTML = ""; // Clear the existing content

  movies.forEach((movie) => {
    const movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    const movieDetails = `
              <div class="card">
                  <img src="${movie.posterURL}" class="card-img-top" alt="${movie.name} poster">
                  <div class="card-body">
                      <h5 class="card-title">${movie.name}</h5>
                      <p class="card-text">Release Date: ${movie.releaseDate}</p>
                  </div>
                  <div class="card-footer">
                      <small class="text-muted">IMDb Rating: ${movie.imdbRating}</small>
                  </div>
              </div>
          `;

    movieDiv.innerHTML = movieDetails;
    moviesList.appendChild(movieDiv);
  });
}

