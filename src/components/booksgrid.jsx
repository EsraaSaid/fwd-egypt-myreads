import Book from "./book";

const BooksGrid = ({ books = [] }) => {
    return (
        <ul className="books-grid">
            {
                books.map((book) => {
                    return (
                        <li>
                            <Book key={book.id} {...book} />
                        </li>
                    );
                })
            }
        </ul>
    )
}


export default BooksGrid;