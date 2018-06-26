import React, { Component } from "react";
import "./App.css";
import PhotoGrid from "./photoGrid";
import HeroHeader from "./heroHeader";
import zupage from "zupage";
import { Container, Header, Divider } from "semantic-ui-react";

class App extends Component {
  state = { post: { body: "", images: [] } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    this.setState({ post });
    console.log("Response!", post);
  }

  renderBodyText = () => {
    const { body, title } = this.state.post;
    if (body !== title) {
      return (
        <div>
          <Divider />
          <Container text>
            <p className="paragraph-spacing">{body}</p>
          </Container>
        </div>
      );
    }
  };

  render() {
    const { images, body, title } = this.state.post;
    console.log("state", this.state);
    return (
      <div className="App">
        <HeroHeader images={images} title={title} />
        <div className="backgroundContainer">
          <Container
            style={{
              paddingLeft: "1%",
              paddingRight: "1%",
              paddingTop: "3%",
              overflow: "auto"
            }}>
            <PhotoGrid images={images} />
          </Container>
          <br />
          <br />
          <br />
          {this.renderBodyText()}
        </div>
      </div>
    );
  }
}

export default App;
