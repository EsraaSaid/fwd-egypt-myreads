import React from 'react';

export const ShelvesContext = React.createContext({
  shelves: {
    wantToRead: {},
    currentlyReading: {},
    read: {},
  },
  updateShelves: () => { },
});