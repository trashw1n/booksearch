import React from 'react';
import { useBookshelf } from '../contexts/BookshelfContext';
import _ from './styles/BookEntry.css';

function Book(book_name, author_name){
  this.book_name = book_name;
  this.author_name = author_name;
}

function BookEntry({name, author, serial, displayButton}) {
  const {addToBookshelf} = useBookshelf();
    return (
        <div className="book-card">
        <div className="book-details">
          <h3 className="book-title">{name}</h3>
          <p className="book-author">{author}</p>
          {displayButton && 
            <button className="add-button" onClick={() => addToBookshelf(new Book(name, author))}>
                Add to Bookshelf
            </button>
           }
        </div>
      </div>
    )
}

export default BookEntry