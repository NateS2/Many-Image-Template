import React, { Component } from "react";
import "./App.css";
import PhotoGrid from "./photoGrid";
import HeroHeader from "./heroHeader";
import zupage from "zupage";
import { Container, Header, Divider } from "semantic-ui-react";

class App extends Component {
  state = { post: { body: "", images: [], page: {} } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    this.setState({ post });
    // console.log("Response!", post);
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
    const { images, body, title, page } = this.state.post;
    // console.log("state", this.state);
    // console.log("color palette", page.color_palette);
    var color1 = "000000";
    var color2 = "ffffff";
    if (page.color_palette != null) {
      color1 = page.color_palette[0];
      color2 = page.color_palette[1];
    }
    return (
      <div
        className="App"
        style={{
          background: "linear-gradient(47deg, #" + color1 + ", #" + color2 + ")"
        }}>
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
