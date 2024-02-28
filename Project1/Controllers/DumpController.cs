using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project1.MoviesSearch;

namespace Project1.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DumpController : ControllerBase
    {
        [HttpGet]
        public MovieSearchResult Get(string query)
        {
            MovieSearchResultItem[] results = {
                new MovieSearchResultItem(1, "pelicula", "lorem ipsum dolor sit amet", "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"),
                new MovieSearchResultItem(2, "pelicula", "lorem ipsum dolor sit amet", "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg")
            };
            return new MovieSearchResult(2, results);
        }
    }
}