import React from 'react';
import _ from './styles/Bookshelf.css';
import List from './List';
import { useBookshelf } from '../contexts/BookshelfContext';
import {useNavigate} from 'react-router-dom';

function Bookshelf() {
    const {bookshelf} = useBookshelf();
    const navigate = useNavigate();
    return (
        <div className="bookshelf">
            <div className='navbar'>
                <h2>Your Book Shelf</h2>
                <button className='go-back-btn' onClick={()=>navigate('/')}> go back </button>
            </div>
            <div className="book-list">
                <List books={bookshelf} viewAdd={false} />
            </div>
        </div>
    );
}

export default Bookshelf