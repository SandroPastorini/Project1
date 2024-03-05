using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Project1.MoviesSearch;

namespace Project1
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<MovieSearchResultItem> MovieResultItems { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
