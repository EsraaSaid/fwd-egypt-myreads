import Book from "./book";

const BooksGrid = ({ books = [] }) => {
    return (
        <ul className="books-grid">
            {
                books.map(({ ...props }) => {
                    return (
                        <li>
                            <Book key={props.id} {...props} />
                        </li>
                    );
                })
            }
        </ul>
    )
}


export default BooksGrid;