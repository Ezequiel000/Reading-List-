import './index.css';
import { useState } from "react";
import BookCreate from "./compnents/BookCreate";
function App(){
    const [books, setBooks]= useState([]);

    const createBook = (title) => {
        console.log('need to addd bool with:', title);
    };
    
    return (
    <div> 
    <BookCreate onSubmit = {createBook}/>
    </div>
    );

}
export default App;