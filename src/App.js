import React, { Component } from 'react';
import './App.css';
import PhotoGrid from './photoGrid';
import zupage from 'zupage';

class App extends Component {
  state = { post: { body: '', images: [] } };

    async componentDidMount() {
      // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
      const post = await zupage.getCurrentPost();
      this.setState({ post });
      console.log('Response!', post);
    }

  render() {
    const { images, title } = this.state.post;

    return (
      <div>
        <PhotoGrid images={images} />
        <h1>title</h1>
      </div>
    );
  }
}

export default App;
