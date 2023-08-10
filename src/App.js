import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';
import BookCard from './components/BookCard'
import AddBook from './components/AddBook'
import GetABook from './components/GetABook'
import UpdateBook from './components/UpdateBook'
import Home from './components/Home'
import { Routes, Route, Link } from 'react-router-dom'


const URL = 'http://localhost:3000/books/'

function App() {


  return (
    <div className="App">
      <h1>TEST</h1>

      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addBook' element={<AddBook />}></Route>
          <Route path='/getABook/:id' element={<GetABook />}></Route>
          <Route path="/updateBook/:id" element={<UpdateBook/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
