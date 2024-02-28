namespace Project1.MoviesSearch
{
    public class MovieSearchResult
    {
        public UInt16 resultCount { get; set; }
        public IList<MovieSearchResultItem> results { get; set; }

        public MovieSearchResult(UInt16 resultCount, IList<MovieSearchResultItem> results) {
            this.resultCount = resultCount;
            this.results = results;
        }
    }
}
