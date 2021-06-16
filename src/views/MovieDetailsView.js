import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import api from '../services/movies-api';
import MovieContainer from '../components/MovieContainer';
import MovieInfoContainer from '../components/MovieInfoContainer';
import routes from '../routes';

class MovieDetailsView extends Component {
    state = {
      movie: {},
      cast: [],
      reviews: [],
    };

    async componentDidMount() {
      const movieId = this.props.match.params.movieId;
      const movie = await api.fetchById(movieId);
      const cast = await api.fetchCast(movieId);
      const reviews = await api.fetchReviews(movieId);
      this.setState({ movie, cast, reviews });
    }
    
    handleGoBack = () => {
      const { history, location } = this.props;
      history.push(location?.state?.from || routes.home);
      console.log(history, location);
    };
    
  render() {
        const {
            backdrop_path,
            id,
            original_title,
            vote_average,
            overview,
            genres,
            poster_path,
        } = this.state.movie;
        
      

        return (
          <div className="MovieDetailsView">
            
            <button
              type="button"
              className="goBackBtn"
              onClick={this.handleGoBack}>
              Go back
            </button>
            
            { id && (
              <MovieContainer
                backdrop_path={backdrop_path}
                poster_path={poster_path}
                original_title={original_title}
                vote_average={vote_average}
                overview={overview}
                genres={genres}
              />
            )}

            {id && (
              <Route
                path={this.props.match.path}
                render={props => {
                  return (
                    <MovieInfoContainer
                      {...props}
                      cast={this.state.cast}
                      reviews={this.state.reviews}
                    />
                  );
                }}
              />
            )}
          </div>
        );
    }
};
 
export default MovieDetailsView;