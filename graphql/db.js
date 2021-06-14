import axios from "axios";
const API_URL = "https://yts.mx/api/v2";

export const getMovies = async (limit, rating) => {
    const { 
        data: { 
            data: { 
                movies 
            } 
        } 
    } = await axios(`${API_URL}/list_movies.json`, {
                params: {
                    limit: limit ? limit : "", 
                    minimum_rating: rating ? rating : 0.0
                }
            });
    return movies;
};

export const getMovie = async id => {
    const { 
        data: { 
            data: { 
                movie 
            } 
        } 
    } = await axios(`${API_URL}/movie_details.json`, {
                params: {
                    movie_id: id
                }
            });
    return movie;
};

export const getSuggestions = async id => {
    const { 
        data: { 
            data: { 
                movie 
            } 
        } 
    } = await axios(`${API_URL}/movie_suggestions.json`, {
                params: {
                    movie_id: id
                }
            });
    return movie;
};