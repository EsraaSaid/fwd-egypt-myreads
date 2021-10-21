import { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/bookshelf";

import getAllResponse from '../mock/getAll.json';

/**
 * shelves:
 * wantToRead
 * currentlyReading
 * read
 */

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        };
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        // TODO: hit API
        const { books } = getAllResponse;
        const wantToRead = [];
        const currentlyReading = [];
        const read = [];

        books.forEach(book => {
            if (book.shelf === 'wantToRead') wantToRead.push(book);
            else if (book.shelf === 'currentlyReading') currentlyReading.push(book);
            else if (book.shelf === 'read') read.push(book);
        });

        this.setState({
            wantToRead,
            currentlyReading,
            read,
        });
    }

    render() {
        return (
            <>
                <header className="list-books-title">
                    <h1>MyReads</h1>
                </header>

                <main className="list-books-content">
                    <BookShelf title="Currently Reading" books={this.state.currentlyReading} />
                    <BookShelf title="Want to Read" books={this.state.wantToRead} />
                    <BookShelf title="Read" books={this.state.read} />
                </main>

                <aside className="open-search">
                    <Link to="/search">
                        <button />
                    </Link>
                </aside>
            </>
        )
    }
}


export default MainPage;