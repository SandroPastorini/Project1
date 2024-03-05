namespace Project1.Movies
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string? ThumbnailUrl { get; set; }

        public Movie() { }
    }
}
