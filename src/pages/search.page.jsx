import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { debounce } from "lodash";

import { getAll, search } from '../BooksAPI';
import BooksGrid from "../components/booksgrid";

const getCategorizedBooks = (books, booksInShelves) => {
    const idsSet = new Map();
    booksInShelves.forEach(({ id, shelf }) => idsSet.set(id, shelf));
    return books.map(book => ({ ...book, shelf: idsSet.get(book.id) }));
};

async function onQueryChange(e) {
    const query = e.target.value?.trim();

    if (query) {
        const [books, booksInShelves] = await Promise.all([search(query), getAll()]);
        this.setState({
            query,
            books: Array.isArray(books) ? getCategorizedBooks(books, booksInShelves) : [],
        });
    } else {
        this.setState({
            query,
            books: [],
        });
    }
}
class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            books: [],
        };

        this.goBack = this.goBack.bind(this);
        this.onQueryChange = debounce(onQueryChange.bind(this), 400);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <>
                <header className="search-books-bar">
                    <button className="close-search" onClick={this.goBack}></button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.onQueryChange} />
                    </div>
                </header>

                <main className="search-books-results">
                    {this.state.query && !this.state.books.length
                        ? 'no results found'
                        : <BooksGrid books={this.state.books} />
                    }
                </main>
            </>
        );
    }

}


export default withRouter(SearchPage);