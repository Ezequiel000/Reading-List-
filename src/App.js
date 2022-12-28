import './index.css';
import { useState } from "react";
import BookCreate from "./compnents/BookCreate";
function App(){
    const [books, setBooks]= useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books,  {id:123, title}];
        setBooks(updatedBooks);
    };
    
    return (
    <div> 
    <BookCreate onSubmit = {createBook}/>
    </div>
    );

}
export default App;