import React, { createContext, useState } from 'react';

export const BookContext = createContext();
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'name of the book', id: 1},
        {title: 'name of the book', id: 2},
        {title: 'name of the book', id: 3}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;