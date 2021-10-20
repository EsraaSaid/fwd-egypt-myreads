const Book = ({ title, authors, cover }) => {

    return (
        <div className="book">
            <div className="book-top">
                {/* cover */}
                <div className="book-cover">
                    {/* title??? */}
                    <div className="book-cover-title"></div>
                    <img src={cover} alt={`${title} by ${authors}`} />
                </div>

                {/* actions button */}
                <div className="book-shelf-changer">
                    <select>

                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book;