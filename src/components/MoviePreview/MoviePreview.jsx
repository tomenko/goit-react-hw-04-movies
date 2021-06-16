const IMG_URL = 'https://image.tmdb.org/t/p/w200'

const MoviePreview = ({title, name, poster_path}) => {
	return (
		<div className="moviePreview">
			<img src={IMG_URL+poster_path} alt={title || name} />
			<div className="moviePreview-body">
				<h4 className="moviePreview-title">{ title || name}</h4>
			</div>
		</div>
	 );
}
 
export default MoviePreview;