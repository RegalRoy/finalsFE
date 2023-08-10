import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
const URL = 'http://localhost:3000/books/'
const GetABook = () =>{
    const[book, setBook] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        axios.get(URL+'getAbook/'+id).then(r=>{
            setBook(r.data);console.log(id)
        })
    },{})
    return(
        <div>
           bookId: {book._id}
          bookTitle: { book.title}
          <div>
            <Link to={`/updateBook/${book._id}`}>U</Link>
          </div>
        </div>
    )
}

export default GetABook