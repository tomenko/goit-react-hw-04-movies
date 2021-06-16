const Reviews = ({ reviews }) => {
	return (
        <ul>
            {reviews.length === 0 ? (
                <span>We don't have any reviews for this movie.</span>
                ) : (
                
                    reviews.map(({ id, author, content }) => (
                        <li key={id}>
                            <h4>Author: {author}</h4>
                            <p>{content}</p>
                        </li>
                    ))
                )
            }
		</ul>
	);
};
 
 
export default Reviews;