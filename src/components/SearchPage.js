import React, { useEffect, useState } from 'react'
import BookEntry from './BookEntry';
import List from './List';
import _ from './styles/SearchPage.css';
import { useNavigate } from 'react-router-dom';

function Book(book_name, author_name){
    this.book_name = book_name;
    this.author_name = author_name;
}

function SearchPage() {
    let navigate = useNavigate();
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState("");
    const search = async (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }
    useEffect(()=>{
        const delayedSearch = setTimeout(async ()=>{
            const query = input.split(" ").join("+");
            const requestURL = `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`;
            const result = await fetch(requestURL).then(response => response.json());
            const cleanBookData = result.docs.map(entry => new Book(
                entry.title,
                entry.author_name[0]
            ));
            setBooks(cleanBookData);
        }, 500);
        return () => clearTimeout(delayedSearch);
    }, [input]);
    return (
        <div className='book-list'>
            <div className='search-bar'>
                <label htmlFor='searchbar'><b>Search for books:   </b></label>
                <input 
                    type='text' 
                    name='searchbar' 
                    placeholder='search here' 
                    onChange={search} 
                    value={input}
                />
                <button className='bookshelf-button' onClick={() => navigate('/bookshelf')}>
                    View Book Shelf
                </button>
            </div>
            <div className='search-result'>
                <List books={books} viewAdd={true}/>
            </div>
        </div>  
    )
}

export default SearchPage