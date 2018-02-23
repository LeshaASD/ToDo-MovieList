import React, {Component, Fragment} from 'react';
import './MovieList.css';
import MovieListInput from "../UI/movieListInput/movieListInput";
import DeleteButton from "../UI/deleteButton/deleteButton";

class MovieList extends Component {


    render() {
        return (
            <div className='movie-list'>
                {this.props.movies.map((movie, i) =>
                    <Fragment  key={i}>
                        <div className='border'>
                            <MovieListInput text={movie.name} change={(event) => this.props.change(movie.id, event)}/>
                            <DeleteButton key={movie.id} click={() => this.props.delete(movie.id)}/>
                        </div>
                    </Fragment>
                )}
            </div>
        )
    }
}

export default MovieList;