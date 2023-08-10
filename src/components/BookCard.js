
import { Routes, Route, Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

const URL = 'https://finalsbe.onrender.com/books/'
const BookCard = (props) => {
    const navigate = useNavigate();
    const handleDelete = () =>{
        axios.delete(URL+'delete/'+ props.book._id).then(r=>{navigate(0)})
    }
    return (
        <div>
            <Link to={`/getABook/${props.book._id}`}>{props.book._id}</Link>
            {/* id: {props.book._id} */}
            title: {props.book.title}
            author: {props.book.author}
            description: {props.book.description}
            <div onClick={()=>{handleDelete()}}>X</div>
        </div>
    )
}

export default BookCard