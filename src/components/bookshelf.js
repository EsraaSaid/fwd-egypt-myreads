import BooksGrid from "./booksgrid";

const BookShelf = ({ title = '', books = [] }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={books} />
            </div>
        </div>
    )
}


export default BookShelf;