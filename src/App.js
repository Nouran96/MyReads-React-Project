import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import ManageBooks from './ManageBooks'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        allBooks: books
      })

      console.log(this.state.allBooks)
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        
          <Route exact path="/" render={() => {
            return (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                
                <ManageBooks books={this.state.allBooks}/>

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
