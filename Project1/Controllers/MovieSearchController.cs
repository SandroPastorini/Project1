﻿using Microsoft.AspNetCore.Mvc;
using Project1.MoviesSearch;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project1.Controllers
{
    [Route("api/moviesearch")]
    public class MovieSearchController : ControllerBase
    {

        // GET api/<MovieSearchController>/search
        [HttpGet("{query}")]
        public MovieSearchResult Get(String query)
        {
            MovieSearchResultItem[] results = {
                new MovieSearchResultItem(1, "pelicula", "lorem ipsum dolor sit amet", "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"),
                new MovieSearchResultItem(2, "pelicula", "lorem ipsum dolor sit amet", "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg")
            };
            return new MovieSearchResult(2, results);
        }
    }
}
