

export async function getMovies(searchTerm) {
    const response = await fetch('http://www.omdbapi.com/?apikey=37fe945a&s=' + searchTerm, {
        method: "GET"
    })
    const data = await response.json()
    
    return data
}

