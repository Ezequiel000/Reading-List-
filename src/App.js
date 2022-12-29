import './index.css';
import { useState, useEffect } from "react";
import BookCreate from "./compnents/BookCreate";
import BookList from './compnents/BookList';
import axios from 'axios';
function App(){
    const [books, setBooks]= useState([]);

    const fetchBooks = async () =>{
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data);
    };

    useEffect(()=>{
        fetchBooks();
    }, []);//empty array as a second argument means fetchBooks only gets called at the first render
        // no argument qouls mean that it gets called every rerender

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title
        });
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
        console.log(response);
    };

    const deleteBookById = async(id) => {
        await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((books)=> {
            return books.id !== id;
        });
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle)=>{
        const response = await axios.put(`http://localhost:3001/books/${id}`,{title:newTitle});
        console.log(response);

        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };
    
    return (
    <div className='app'> 
    <h1>Reading List</h1>
    <BookList onEdit = {editBookById} books = {books} onDelete = {deleteBookById}/>
    <BookCreate onCreate= {createBook}/>
    </div>
    );

}
export default App;