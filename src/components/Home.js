import { useState, useEffect } from 'react'
import axios from 'axios';
import BookCard from './BookCard'
import AddBook from './AddBook'
import { Routes, Route, Link } from 'react-router-dom'

const URL = 'https://finalsbe.onrender.com/books/'
const Home = (e) => {
    const [books, setBooks] = useState([])


    useEffect(() => {
        axios.get(URL).then(r => {
            setBooks(r.data); console.log(r.data)
        })
    },[])
    return (
        <div className="App">
           
            <h2>No of Books: {books.length}</h2>
            {books.map(book => <BookCard book={book} />)}
            <div>
                <Link to='/addBook'>Add Books</Link>
            </div>
            <div>
                <Routes>
                    <Route path='/addBook' element={<AddBook />}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default Home