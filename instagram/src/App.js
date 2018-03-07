import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
      </div>
    );
  }
}

export default App;
