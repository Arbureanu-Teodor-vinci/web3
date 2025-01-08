import React, { useState } from 'react';
import axios from 'axios';

const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
    const [books, setBooks] = useState([]);

    const updateStateBook = async (book) => {
        try {
            const response = await axios.patch(`http://localhost:3000/books/${book.id}`, book);
            const updatedBook = response.data;

            const updatedBooks = books.map((b) => (b.id === updatedBook.id ? updatedBook : b));
            setBooks(updatedBooks);
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const exposedValue = {
        updateStateBook,
    };

    return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };