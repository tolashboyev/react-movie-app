import React from "react"
import Loader from "../components/Loader"
import Movies from "../components/Movies"
import Search from "../components/Search"
export default class Main extends React.Component {
    state = {
        movies: []
    }
    componentDidMount() {
        fetch("https://www.omdbapi.com/?i=tt3896198&apikey=77c2a6ad&s=avengers")
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    searchMovies = (str, type = 'all') => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=77c2a6ad&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }
    render() {
        return (
            <div className="content container">
                <Search searchMovies={this.searchMovies} />
                {this.state.movies.length ? 
                    (<Movies movies={this.state.movies} />) : (<Loader />)}
            </div>
        )
    }
}