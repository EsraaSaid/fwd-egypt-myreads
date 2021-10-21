const Book = ({ id, title, authors = [], cover, imageLinks = {} }) => {
    const authorsText = authors.reduce((acc, next) => {
        if (acc === '') return next;
        return `${acc}, ${next}`;
    }, '');

    return (
        <div className="book">
            <div className="book-top" style={{ backgroundImage: `url('${imageLinks.thumbnail}')` }}>
                {/* cover */}
                <div className="book-cover">
                    {/* title??? */}
                    <div className="book-cover-title"></div>
                    {/* <img src={imageLinks.thumbnail} alt={`${title} by ${authorsText}`} /> */}
                </div>

                {/* actions button */}
                <div className="book-shelf-changer">
                    <select>

                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authorsText}</div>
        </div>
    )
}

export default Book;