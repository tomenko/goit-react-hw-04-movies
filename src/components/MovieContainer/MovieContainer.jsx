import './movieContainer.css';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieContainer = ({ backdrop_path, original_title, vote_average, overview, genres, poster_path }) => {
	return (
		<div className="movieContainer">
			<h1>{original_title}</h1>
			<div className="movieContainer-thumb">
			    <img src={`${IMG_URL}/${backdrop_path||poster_path}`} alt={`Poster of ${original_title}`} />
			</div>
			<p>User score: {vote_average * 10}%</p>
			<h2>Overview</h2>
			<p>{overview}</p>
			<h2>Genres</h2>
			<p>{genres.map(genre=>genre.name).join(', ')}</p>
		</div>
	 );
}
 
export default MovieContainer;