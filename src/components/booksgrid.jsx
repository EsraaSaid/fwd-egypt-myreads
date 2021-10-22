import Book from "./book";

const BooksGrid = ({ books = [] }) => {
    return (
        <ul className="books-grid">
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <Book {...book} />
                        </li>
                    );
                })
            }
        </ul>
    )
}


export default BooksGrid;