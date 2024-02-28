using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieSearchController : ControllerBase
    {
        [HttpGet]
        public String Get(String query) { return query; }
    }
}
