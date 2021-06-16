import { Link } from 'react-router-dom';

const MoviesList = ({movies}) => {
    return (
        <>
            <ul>{movies.map(
                ({id, original_title, original_name}) => <li className="movies-list" key={id}>
                    <Link to={`/movies/${id}`}>
                        {original_title || original_name}
                    </Link>
                </li>
              )}
            </ul>
        </>
    );
}
 
export default MoviesList;