import React, { Component } from 'react'

class ManageBooks extends Component {

    render() {
        return (
            <div className="list-books-content">
              <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => {
                                return book.shelf === 'currentlyReading' && ( // Displays only books in this shelf
                                    <li key={book.id}>
                                        <div className="book">
                                        <div className="book-top">
                                        {book.hasOwnProperty('imageLinks') && 
                                            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)}
                                            <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => {
                                                this.props.onChangingShelf(e, book)
                                                if(book.shelf === 'none')
                                                    this.props.onRemovingBook(book)
                                            }}>
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
                            )
                            })}
                        </ol>
                    </div>
                  </div>

                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => {
                                return book.shelf === 'wantToRead' && (
                                    <li key={book.id}>
                                        <div className="book">
                                        <div className="book-top">
                                        {book.hasOwnProperty('imageLinks') && 
                                            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)}
                                            <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => this.props.onChangingShelf(e, book)}>
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
                            )
                            })}
                        </ol>
                    </div>
                  </div>

                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => {
                                return book.shelf === 'read' && (
                                    <li key={book.id}>
                                        <div className="book">
                                        <div className="book-top">
                                        {book.hasOwnProperty('imageLinks') && 
                                            (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>)}
                                            <div className="book-shelf-changer">
                                            <select value={book.shelf} onChange={(e) => this.props.onChangingShelf(e, book)}>
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
                            )
                            })}
                        </ol>
                    </div>
                  </div>

              </div>
            </div>
        )
    }
}

export default ManageBooks