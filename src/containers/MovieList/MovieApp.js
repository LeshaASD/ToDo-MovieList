import React, {Component, Fragment} from 'react';
import Actions from "../../components/movieList/actions/actions";
import MovieList from "../../components/movieList/MovieList/MovieList";
import axios from 'axios';
import Spinner from "../../components/UI/Spinner/Spinner";

class MovieApp extends Component {
    state = {
        inputValue: '',
        movies: [],
        loading: false
    };

    componentDidMount() {
        this.setState({loading: true});

        axios.get('movieList.json').then(response => {
            const newArr = [];
            for (let key in response.data) {
                newArr.push({...response.data[key], id: key});
            }

            this.setState({movies: newArr});
        }).finally(() => {
            this.setState({loading: false});
        })
    }

    _makePostRequest = (obj) => {
        return axios.post('movieList.json', obj).then(response => {
            obj.id = response.data.name;
            return obj;
        })
    };

    _makeDelRequest = id => {
        axios.delete(`movieList/${id}.json`);
    };

    _makePutRequest = (id, obj) => {
        return axios.put(`movieList/${id}.json`, obj);
    };

    inputHandlerOnChange = (event) => {
        const inputText = event.target.value;
        this.setState({inputValue: inputText})
    };

    addButtonHandler = () => {
        if (this.state.inputValue) {
            let loading = this.state.loading;
            this.setState({loading: !loading});

            const movieObj = {};
            movieObj.name = this.state.inputValue;
            const movies = [...this.state.movies];

            this._makePostRequest(movieObj).then(response => {
                movies.push(response);

                this.setState({movies: movies, loading: false});
            });
        }
    };

    deleteButtonHandler = (id) => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id === id);
        movies.splice(index, 1);
        this._makeDelRequest(id);

        this.setState({movies: movies, loading: false})
    };

    changeExistingMovieName = (id, event) => {
        const movies = [...this.state.movies];
        const index = movies.findIndex(movie => movie.id === id);
        const movie = {...movies[index]};
        movie.name = event.target.value;
        movies[index] = movie;

        this.setState({movies: movies});
        this._makePutRequest(id, movie);
    };

    render() {
        return (
            !this.state.loading ?
            <Fragment>
                <Actions movieName={this.inputHandlerOnChange} movieAdd={this.addButtonHandler}/>
                <MovieList movies={this.state.movies} delete={this.deleteButtonHandler}
                change={this.changeExistingMovieName}/>
            </Fragment>
                : <Spinner/>
        )
    }
}

export default MovieApp;
