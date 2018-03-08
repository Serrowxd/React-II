import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dumArr: [],
    };
  }

  componentDidMount() {
    this.setState({dumArr: dummyData})
  }

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
