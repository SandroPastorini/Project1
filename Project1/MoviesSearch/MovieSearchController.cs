using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Project1.MoviesSearch
{
    [Route("api/moviesearch")]
    public class MovieSearchController : ControllerBase
    {

        ApplicationDbContext _context;

        public MovieSearchController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET api/<MovieSearchController>/search
        [HttpGet("{query}")]
        public MovieSearchResult Get(string query)
        {
            var movieResultItems = _context.MovieResultItems.ToList();

            return new MovieSearchResult(movieResultItems.Count, movieResultItems);
        }
    }
}
