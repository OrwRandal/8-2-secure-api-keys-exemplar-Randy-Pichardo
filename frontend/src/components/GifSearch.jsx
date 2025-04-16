import { useState } from "react"

function GifSearch({setSearchTerm}) {
    // I use state to store the user's input for the search term in order to make it a controlled form
    const [query, setQuery] = useState("");
    const inputSearch = (e) => {
        e.preventDefault();
        // I update the searchTerm state with the current query
        // This causes the useEffect in GifContainer to run again, refetching the gifs with the new search query
        setSearchTerm(query);
    }
    return (
        <form onSubmit={inputSearch}>
            <label htmlFor="searchInput">Enter a Search Term </label>
            {/* 
                The "value" makes the input field follow the "query" state
                "onChange" updates the "query" state as the user types, turning the input into a controlled form
            */}
            <input type="text" className="form-control" id="searchInput" value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch