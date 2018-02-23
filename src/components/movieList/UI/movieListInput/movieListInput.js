import React, {Component} from 'react';
import './movieListInput.css';

class MovieListInput extends Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.text !== this.props.text
    }

    render() {
        return (
            <div className='movieList-input'>
                <span><input type="email" value={this.props.text} className='input1' onChange={this.props.change}/></span>
            </div>
        )
    }

}

export default MovieListInput;