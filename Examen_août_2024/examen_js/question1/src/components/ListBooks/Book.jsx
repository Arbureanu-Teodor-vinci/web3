import { Context as BookContext } from '../../contexts/bookContext';
import { useContext, useState } from 'react';

const Book = ({ book }) => {
    const { updateStateBook } = useContext(BookContext);
    const [bookState, setBookState] = useState(book.state);

    const handleStateChange = (event) => {
        setBookState(event.target.value);
    };

    const handleUpdateClick = () => {
        updateStateBook({ ...book, state: bookState });
    };

    return (
        <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <select value={bookState} onChange={handleStateChange}>
                <option value="read">lu</option>
                <option value="to_read">à lire</option>
                <option value="reading">en cours de lecture</option>
            </select>
            <button onClick={handleUpdateClick}>Mettre à jour l'état</button>
        </div>
    );
};

export default Book;