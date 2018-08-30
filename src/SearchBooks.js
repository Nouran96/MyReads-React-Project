import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

    state = {
        query: '',
        books: [],
    }

    updateQuery = (query) => {
        // Fetch searched books from API and update state to re-render
        this.setState({
            query: query
        })

        if(query) {
            BooksAPI.search(query).then(books => {
                this.setState({
                    books: books
                })
            })
        }
        else {
            this.setState({
                books: []
            })
        }
    }

    render() {

        const { query, books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input 
                    type="text" 
                    placeholder="Search by title or author" 
                    value={query}
                    onChange={(e) => {
                        this.updateQuery(e.target.value)
                    }}
                    />

                </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* If the query is empty or can't fetch the books from the api, clear the following section */}
                        {query !== '' && !books.error && books.map(book => (
                          <li key={book.id}>
                            <div className="book">
                              <div className="book-top">
                              {/* Check for the book's thumbnail as not to break the program */}
                              {book.hasOwnProperty('imageLinks') && 
                              (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)}
                                
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              <div className="book-authors">{book.authors}</div>
                            </div>
                          </li>
                        ))}
                    </ol>
                </div>
          </div>
        )
    }
}

export default SearchBooks