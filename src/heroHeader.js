import React, { Component } from "react";
import LazyHero from "react-lazy-hero";

class HeroHeader extends Component {
  state = { images: [], title: "", imageSRC: "", count: 0 };

  async componentWillReceiveProps(newProps) {
    // console.log("New Props on the hero", newProps);

    await this.setState({ images: newProps.images, title: newProps.title });
    // console.log("did await", this.state);
    this.changeHeroImage();
  }

  changeHeroImage = () => {
    // do whatever you like here
    var images = this.state.images; // IMAGES;
    var count = this.state.count;
    var a = this;
    var url = "";

    if (count >= images.length) {
      count = 0;
    }
    images.map(function(image, index) {
      if (index == count) {
        url = image.url;
      }
    });
    count++;
    this.setState({ imageSRC: url, count: count });
    setTimeout(this.changeHeroImage, 5000);
  };

  changeTextSize = title => {
    if (title != null) {
      if (title.length > 50) {
        return (
          <h1 className="hero-text" style={{ fontSize: 20 }}>
            {title}
          </h1>
        );
      } else {
        return <h1 className="hero-text">{title}</h1>;
      }
    }
  };

  render() {
    return (
      <div>
        <LazyHero
          imageSrc={this.state.imageSRC} //imageSrc="https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d99cf967bd2c40d8329e961e027cec97&auto=format&fit=crop&w=1950&q=80"
          parallaxOffset={100}
          color="#000000"
          opacity={0.4}
          className="App"
          transitionDuration={600}
          transitionTimingFunction="ease-in-out">
          {this.changeTextSize(this.state.title)}
        </LazyHero>

        {/* ... */}
      </div>
    );
  }
}

export default HeroHeader;
