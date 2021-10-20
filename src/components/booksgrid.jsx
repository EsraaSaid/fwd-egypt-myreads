import Book from "./book";

const BooksGrid = ({ books = [] }) => {
    return (
        <ul className="books-grid">
            <li>
                {
                    books.map(({ ...props }) => {
                        return <Book {...props} />
                    })
                }
            </li>
        </ul>
    )
}


export default BooksGrid;