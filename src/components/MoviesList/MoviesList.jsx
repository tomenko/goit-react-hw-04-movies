import { NavLink, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

const MoviesList = ({movies, location}) => {
    return (
        <>
            <ul className="movieList">{movies.map(
                ({id, original_title, original_name, poster_path}) => <li className="movies-list" key={id}>
                    <NavLink to={{
                        pathname: `/movies/${id}`,
                        state: { from: location, }
                    }}>
                        <MoviePreview title={original_title} name={original_name} poster_path={poster_path}/>
                    </NavLink>
                </li>
              )}
            </ul>
        </>
    );
}
 
export default withRouter(MoviesList);