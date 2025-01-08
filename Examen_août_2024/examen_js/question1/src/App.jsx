import './App.css'
import { Outlet, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Book from './components/ListBooks/Book'

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <span>   |   </span>
    <Link to="books">Gestion de livres</Link>
  </nav>
)

const HomePage = () => <p>Page d’accueil de la bibliothèque 
personnelle </p>;

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, []);

  return (
    <div>
      <ul>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
    </div>
  )
}

const App = () => (
  <div>
    <NavBar />
    <Outlet />
  </div>
)

export default App;
export { HomePage, BooksPage };