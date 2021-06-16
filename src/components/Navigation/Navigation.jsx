import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
    return (
        <ul className="AppBar">
            <li> <NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
            <li> <NavLink to={routes.movies} className="NavLink" activeClassName="NavLink--active">Movies</NavLink></li>
        
        </ul>
    );   
}
 
export default Navigation;