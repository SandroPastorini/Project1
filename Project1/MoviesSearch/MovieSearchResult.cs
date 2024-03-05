namespace Project1.MoviesSearch
{
    public class MovieSearchResult
    {
        public int ResultCount { get; set; }
        public IList<MovieSearchResultItem> Results { get; set; }

        public MovieSearchResult(int resultCount, IList<MovieSearchResultItem> results) {
            this.ResultCount = resultCount;
            this.Results = results;
        }
    }
}
