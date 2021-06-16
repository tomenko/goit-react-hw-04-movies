import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieDetailsView from './views/MovieDetailsView';
import NotFoundView from './views/NotFoundView';
import AppBar from './components/AppBar';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route path={routes.movies} component={MoviesView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
}


export default App;