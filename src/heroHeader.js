import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

const IMAGES =
[{
        url: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        url: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        url: "https://images.unsplash.com/photo-1515764001020-c78a32a91265?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e402378e4dd7653f978eb38ff32fb9e8&auto=format&fit=crop&w=948&q=80",
        thumbnail: "https://images.unsplash.com/photo-1515764001020-c78a32a91265?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e402378e4dd7653f978eb38ff32fb9e8&auto=format&fit=crop&w=948&q=80",
        thumbnailWidth: 500,
        thumbnailHeight: 719,

},

{
        url: "https://images.unsplash.com/photo-1507838175923-5689c9e3f527?ixlib=rb-0.3.5&s=4b7316b9854e1113842808a706e5f584&auto=format&fit=crop&w=1500&q=80",
        thumbnail: "https://images.unsplash.com/photo-1507838175923-5689c9e3f527?ixlib=rb-0.3.5&s=4b7316b9854e1113842808a706e5f584&auto=format&fit=crop&w=1500&q=80",
        thumbnailWidth: 7930,
        thumbnailHeight: 5289,
},

{
        url: "https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&s=79070bda908b13b723e1663afa969da4&auto=format&fit=crop&w=1493&q=80",
        thumbnail: "https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&s=79070bda908b13b723e1663afa969da4&auto=format&fit=crop&w=1493&q=80",
        thumbnailWidth: 5000,
        thumbnailHeight: 2800,
},

{
        url: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]



class HeroHeader extends Component {
  state = {images: [], title: "", imageSRC: "", count: 0}

  async componentWillReceiveProps(newProps) {
    console.log('New Props on the hero', newProps);

    await this.setState({ images: newProps.images, title: newProps.title });
    console.log('did await', this.state);
    this.changeHeroImage();
  }

  changeHeroImage = () => {
    // do whatever you like here
    var images = IMAGES; //this.state.images;
    var count = this.state.count;
    var a = this;
    var url = "";

    if (count >= images.length) {
      count = 0;
    }
    images.map(function(image, index) {
      if (index == count) {
        url = image.url
      }
    })
    count++;
    this.setState({imageSRC: url, count: count})
    setTimeout(this.changeHeroImage, 5000);
  }

  render() {
    return (
        <div>
            <LazyHero imageSrc={this.state.imageSRC}//imageSrc="https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d99cf967bd2c40d8329e961e027cec97&auto=format&fit=crop&w=1950&q=80"
            parallaxOffset={100}
            color="#000000"
            opacity={0.4}
            className="App"
            transitionDuration={600}
            transitionTimingFunction="ease-in-out"
            >
                <h1 className="hero-text">{this.state.title}</h1>
            </LazyHero>

            {/* ... */}
        </div>
    );
  }
};

export default HeroHeader;
