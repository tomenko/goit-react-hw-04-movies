import './App.css';
import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
/* import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView'; */
import NotFoundView from './views/NotFoundView';
import AppBar from './components/AppBar';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-view" */)
);
const MovieDetailsView = lazy(() =>
  import('./views/MovieDetailsView' /* webpackChunkName: "movie-details-view" */)
);
const MoviesView = lazy(() =>
  import('./views/MoviesView' /* webpackChunkName: "movies-view" */)
);

const App = () => {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
          <Route path={routes.movies} component={MoviesView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
}


export default App;