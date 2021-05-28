// API KEY - 9f1134af58719c6eafd6e4e6c6a2afce

// example API request  - https://api.themoviedb.org/3/movie/550?api_key=9f1134af58719c6eafd6e4e6c6a2afce
const API_KEY = "9f1134af58719c6eafd6e4e6c6a2afce";
//fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}$with_networks=213`, --> this endpoint is not working so using the toprated for the NetFlix original url

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
}

export default requests;