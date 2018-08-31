import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ManageBooks from './ManageBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    value: '', // Stores the value of the new shelf
    changedShelf: false // Detector for changing shelves to re-render
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      })
    })
  }

  handleChange = (event, book) => {
    this.setState({
        value: event.target.value
    }, function() {
        book.shelf = this.state.value

        this.setState({
            changedShelf: true
        })

        BooksAPI.update(book, book.shelf)

        this.setState({changedShelf: false})
    })
  }

  removeBook = (removedBook) => {
    this.setState((state) => ({
      allBooks: state.allBooks.filter(book => book !== removedBook)
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => {
          return (
            <SearchBooks onChoosingShelf={this.handleChange} books={this.state.allBooks}/>
          )
        }} />
        
          <Route exact path="/" render={() => {
            return (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                
                <ManageBooks books={this.state.allBooks} onChangingShelf={this.handleChange} onRemovingBook={this.removeBook}/>

                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )
          }} />   
      </div>
    )
  }
}

export default BooksApp
