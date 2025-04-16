import { getTrendingGifs, getGifsBySearch } from '../adapters/giphyAdapters';
import { useEffect, useState } from 'react';

function GifContainer({searchTerm}) {
    const [gifs, setGifs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        // I create the doFetch function here because useEffect can't be async directly
        // Since we need to fetch data and wait for the result, we use an async function inside useEffect
        const doFetch = async () => {
            // I fetch either trending GIFs or search results depending on whether there's a search term
            const [data, error] = searchTerm? 
            await getGifsBySearch(searchTerm): await getTrendingGifs();

            // If there's an error, I set the error state
            if (error) {
                return setError(error);
            }

            // I set the fetched GIFs to display
            setGifs(data.data);
        }
        doFetch();
    // When the user submits the search form, searchTerm gets updated
    // This triggers the useEffect again and fetches the new results
    }, [searchTerm]);

    if (!gifs) {
        return (
            <div>
                <h3>Sorry, we couldn't fetch the gifs at this time.</h3>
            </div >
        )
    }

    return (
        <ul>
            {
                gifs.map((gif) => {
                    return <li key={gif.id}>
                        <img src={gif.images.original.url} alt="" />
                    </li>
                })
            }
        </ul>
    )
}

export default GifContainer
