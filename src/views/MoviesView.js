import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import api from '../services/movies-api';

class SearchView extends Component {
  state = {
    SearchQuery: '',
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    if (location?.state?.searchQuery) {
      this.setState({ SearchQuery: location?.state?.searchQuery });
    }
    if (window.location.search) {
      const url = new URLSearchParams(window.location.search);
      this.setState({ SearchQuery: url.get('query') });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchQuery !== this.state.SearchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    this.setState({ SearchQuery: query });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
      state: { searchQuery: query },
    });
  };

  fetchMovies = async () => {
    try {
      const movies = await api.searchMovies(this.state.SearchQuery);
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onChangeQuery} />

        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default SearchView;