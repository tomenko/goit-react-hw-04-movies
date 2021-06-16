import React, {Component} from 'react';
import api from '../services/movies-api';
import MoviesList from '../components/MoviesList';

class HomeView extends Component {
    state = {
    trending: [],
    };

    async componentDidMount() {
        const trending = await api.fetchMovies();
        this.setState({ trending });
        console.log(trending);
        
    }
    
    render() {
        let movUrl = this.props.match.url;
        console.log(this.props.match.url);
        return (<>
            <h1>Trending movies</h1>
            <MoviesList movies={this.state.trending} movUrl={movUrl}/>
        </>);
    }
}
 
export default HomeView;