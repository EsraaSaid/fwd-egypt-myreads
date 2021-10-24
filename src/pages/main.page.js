import { useContext } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/bookshelf";

import { ShelvesContext } from "../contexts/shelves.context";

/**
 * shelves:
 * wantToRead
 * currentlyReading
 * read
 */

const MainPage = () => {
    const { shelves } = useContext(ShelvesContext);

    return (
        <>
            <header className="list-books-title">
                <h1>MyReads</h1>
            </header>

            <main className="list-books-content">
                <BookShelf title="Currently Reading" books={Object.values(shelves.currentlyReading)} />
                <BookShelf title="Want to Read" books={Object.values(shelves.wantToRead)} />
                <BookShelf title="Read" books={Object.values(shelves.read)} />
            </main>

            <aside className="open-search">
                <Link to="/search">
                    <button />
                </Link>
            </aside>
        </>
    )

}


export default MainPage;