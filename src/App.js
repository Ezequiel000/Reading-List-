import './index.css';
import { useEffect , useContext} from "react";
import BookCreate from "./compnents/BookCreate";
import BookList from './compnents/BookList';
import BooksContext from './context/books';

function App(){
    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);//empty array as a second argument means fetchBooks only gets called at the first render
        // no argument qouls mean that it gets called every rerender
    return (
    <div className='app'> 
    <h1>Reading List</h1>
    <BookList />
    <BookCreate />
    </div>
    );

}
export default App;