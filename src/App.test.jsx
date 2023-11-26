import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { setupServer } from 'msw/node'
import { http, HttpResponse } from "msw"
import App from "./App"

const server = setupServer(
    http.get('http://www.omdbapi.com/*', () => {
        return HttpResponse.json({
            Search: [
                {
                    "Title": "Ronny & Ragge",
                    "Year": 1995,
                    "Poster": "none",
                    "imdbID": "lkjasddk"
                },
                {
                    "Title": "Bingolotto",
                    "Year": 1995,
                    "Poster": "none",
                    "imdbID": "lkasddlk"
                },
                {
                    "Title": "Bröderna Fluff",
                    "Year": 1995,
                    "Poster": "none",
                    "imdbID": "kjasddlk"
                },
                {
                    "Title": "Stoppa Duvan",
                    "Year": 1995,
                    "Poster": "none",
                    "imdbID": "lkjasdd"
                }
            ]
        })
    })
)


beforeAll(() => {
    server.listen()
})
afterAll(() => server.close())


describe('App', () => {


    it('should render 4 MovieCard-components', async () => {
        render(<App />)

        await waitFor(() => {
            expect(screen.queryByText('No movies found')).not.toBeInTheDocument()
        })

        const movieItems = screen.getAllByRole('movie-item')

        expect(movieItems).toHaveLength(4)
        
    })

})