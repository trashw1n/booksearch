import React from 'react'
import BookEntry from './BookEntry'
import _ from './styles/List.css';

function List({books, viewAdd}) {
  return (
    <div className='book-list'>
        {
            books.map((book, index)=>
                <BookEntry 
                    name={book.book_name} 
                    author={book.author_name} 
                    serial={index}
                    displayButton={viewAdd}
                    key={index} 
                />
            )
        }
    </div>
  )
}

export default List