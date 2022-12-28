import './index.css';
import { useState } from "react";
import BookCreate from "./compnents/BookCreate";
import BookList from './compnents/BookList';
function App(){
    const [books, setBooks]= useState([]);

    const createBook = (title) => {
        const updatedBooks = [...books,  {
            id: Math.round(Math.random()*9999), title}];
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((books)=> {
            return books.id !== id;
        });
        setBooks(updatedBooks);
    };
    
    return (
    <div className='app'> 
    <BookList books = {books} onDelete = {deleteBookById}/>
    <BookCreate onCreate= {createBook}/>
    </div>
    );

}
export default App;