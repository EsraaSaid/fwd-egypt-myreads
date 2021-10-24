import './App.css';
import MainPage from './pages/main.page';
import SearchPage from './pages/search.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { ShelvesContext } from './contexts/shelves.context';
import { getAll } from './BooksAPI';


const App = () => {
  const [shelves, setShelves] = useState({
    wantToRead: {},
    currentlyReading: {},
    read: {},
  });

  const updateShelves = async () => {
    const books = await getAll();
    const wantToRead = {};
    const currentlyReading = {};
    const read = {};

    books.forEach(book => {
      if (book.shelf === 'wantToRead') wantToRead[book.id] = book;
      else if (book.shelf === 'currentlyReading') currentlyReading[book.id] = book;
      else if (book.shelf === 'read') read[book.id] = book;
    });

    setShelves({
      wantToRead,
      currentlyReading,
      read,
    });
  };

  useEffect(() => {
    updateShelves();
  }, []);

  return (
    <div className="app">
      <Router>
        <ShelvesContext.Provider value={{ shelves, updateShelves }}>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </ShelvesContext.Provider>
      </Router>
    </div>
  );
}

export default App;
