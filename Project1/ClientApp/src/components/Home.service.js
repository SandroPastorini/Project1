export async function getSearchResults(query) {
    const response = await fetch(`searchMovies/${query}`);
    const data = await response.json();
    return data
}