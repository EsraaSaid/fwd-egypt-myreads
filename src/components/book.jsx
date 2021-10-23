import { useContext, useEffect, useState } from "react";
import { ShelvesContext } from '../contexts/shelves.context';

import { update } from "../BooksAPI";

const getAuthorsText = (authors) => authors && authors.reduce((acc, next) => {
    if (acc === '') return next;
    return `${acc}, ${next}`;
}, '')

const coverImage = (imageLinks) => imageLinks ? imageLinks.thumbnail : '/default-cover.jpg';


const Book = ({ id, title, authors, imageLinks, shelf: propShelf }) => {
    const { shelves, updateShelves } = useContext(ShelvesContext);
    const [ shelf, setShelf ] = useState(propShelf);

    useEffect(() => {
        if (propShelf) return null; // do nothing (ex: main page)

        ['currentlyReading', 'wantToRead', 'read'].forEach(shelfKey => {
            // if book ID is found in the shelf 'shelfKey', setShelf to the shelfKey
            if (shelves[shelfKey][id]) setShelf(shelfKey);
        });
        alert('book shelf updated');
    });

    const updateBookShelf = async (e) => {
        const shelf = e.target.value;
        setShelf({ shelf });
        await update({ id }, shelf);
        updateShelves();
    }

    return (
        <div className="book">
            <div className="book-top" >
                <img className="book-cover" src={coverImage(imageLinks)} alt="cover" />
                {/* <div className="book-cover-title"></div> */}
                {/* actions button */}
                <div className="book-shelf-changer">
                    <select onChange={updateBookShelf} value={shelf}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{getAuthorsText(authors)}</div>
        </div>
    )

}

export default Book;