import React, { createContext, useContext, useState } from 'react';

const BookshelfContext = createContext();

export const useBookshelf = ()=>{
    return useContext(BookshelfContext);
}

export const BookshelfProvider = ({children})=>{
    const [bookshelf, setBookshelf] = useState([]);
    const addToBookshelf = book => {
        setBookshelf(prevBookshelf => [...prevBookshelf, book]);
    };
    return (
        <BookshelfContext.Provider value={{bookshelf, addToBookshelf}}>
            {children}
        </BookshelfContext.Provider>
    );
}


