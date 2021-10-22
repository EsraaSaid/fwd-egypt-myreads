import { Component } from "react";
import { withRouter } from 'react-router-dom';
import { debounce } from "lodash";

import BooksGrid from "../components/booksgrid";

import searchResponse from '../mock/search.json';


async function onQueryChange(e) {
    const query = e.target.value;

    console.log('onQueryChange called');
    if (query) {
        // TODO: hit API
        const { books } = searchResponse;
        this.setState({
            books,
        });
    } else {
        this.setState({
            books: [],
        });
    }
}
class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <BooksGrid books={this.state.books} />
                </main>
            </>
        );
    }

}


export default withRouter(SearchPage);