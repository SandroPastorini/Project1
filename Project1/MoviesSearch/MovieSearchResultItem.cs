namespace Project1.MoviesSearch
{
    public class MovieSearchResultItem
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }

        public MovieSearchResultItem(int id, string title, string description, string imgUrl)
        {
            Id = id;
            Title = title;
            Description = description;
            ImgUrl = imgUrl;
        }
    }
}
