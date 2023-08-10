import { useState, useEffect } from 'react'
import axios from 'axios';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
const URL = 'http://localhost:3000/books/'

const AddBook = (e) => {
    const navigate = useNavigate();
    const [book, setBook] = useState({
        title: "",
        author: "",
        description: ""
    })
    const onChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value })
    }
    const handleCreate = (e) => {
        e.preventDefault();
        axios.post(URL + 'add', book).then(res => {
            setBook({
                title: "",
                author: "",
                description: ""
            });navigate('/')
        })
    }
    return (
        <div>
            <div>
                <button onClick={()=>{navigate('/')}}>SHOW BOOK LIST</button>
            </div>
            <form onSubmit={handleCreate}>

                <table>
                    <tr>
                        <td>Title</td>
                        <td><input name='title' onChange={onChange}></input></td>
                    </tr>
                    <tr>
                        <td>Author</td>
                        <td><input name='author' onChange={onChange}></input></td>
                    </tr>
                    <tr>
                        <td>Desc</td>
                        <td><input name='description' onChange={onChange}></input></td>
                    </tr>
                </table>
                <input type='submit'></input>
            </form>
        </div>
    )

}

export default AddBook;