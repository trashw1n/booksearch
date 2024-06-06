import './App.css';
import {BookshelfProvider} from './contexts/BookshelfContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchPage from './components/SearchPage';
import Bookshelf from './components/Bookshelf';

function App() {
  return (
    <div className="App">
      <BookshelfProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SearchPage />}/>
            <Route path='/bookshelf' element={<Bookshelf />}/>
          </Routes>
        </BrowserRouter>
      </BookshelfProvider>
    </div>
  );
}

export default App;
