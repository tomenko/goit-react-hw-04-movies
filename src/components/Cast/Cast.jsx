import noImg from '../../images/no-images-profile.jpg'
import './cast.css';
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const Cast = ({ cast }) => {
	return (
		<ul className="cast">
			{cast.map(({ id, profile_path, name, character }) => (
				<li key={id}>
					<div>
						{<img className="img-profile" src={profile_path ? `${IMG_URL}${profile_path}` : noImg} alt={`${name}`} />}
						<div>
							<p>Actor: <strong>{name}</strong></p>
							<p>Character: <strong>{character}</strong></p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
 
 
export default Cast;