import axios from "axios";

export async function getSearchResults(query) {
    // const response = await axios.get(`api/searchMovies/${query}`);
    const response = await axios.get(`/api/moviesearch/${query}`);

    return response.data.results
}