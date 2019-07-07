import React, { Component } from 'react';
import Header from './components/header'
import ArticleList from './components/article-list'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


class App extends Component {

  render(){
    return (
      <div>
        <Header/>
        <ArticleList/>
        <Footer/>
      </div>
    )}
}

export default App;
