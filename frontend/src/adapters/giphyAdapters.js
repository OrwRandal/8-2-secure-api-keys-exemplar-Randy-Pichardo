import { handleFetch } from './handleFetch.js'

// This function fetches data from the /api/gifs endpoint that was set up in the backend
// It retrieves trending GIFs from the API
export const getTrendingGifs = async () => {
  return await handleFetch(`/api/gifs`)
}

// This function fetches GIFs based on the search term
// The search term is used as a query parameter in the API request
export const getGifsBySearch = async (searchTerm) => {
  return await handleFetch(`/api/gifs?search=${searchTerm}`);
}