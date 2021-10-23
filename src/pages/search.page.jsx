import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { debounce } from "lodash";

import { search } from '../BooksAPI';
import BooksGrid from "../components/booksgrid";

async function onQueryChange(e) {
    const query = e.target.value?.trim();

    if (query) {
        const books = await search(query);
        this.setState({
            query,
            books: Array.isArray(books) ? books : [],
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