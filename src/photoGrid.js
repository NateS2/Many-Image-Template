import React, { Component } from "react";
import Gallery from "react-grid-gallery";

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" }
    ],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src:
      "https://images.unsplash.com/photo-1515764001020-c78a32a91265?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e402378e4dd7653f978eb38ff32fb9e8&auto=format&fit=crop&w=948&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1515764001020-c78a32a91265?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e402378e4dd7653f978eb38ff32fb9e8&auto=format&fit=crop&w=948&q=80",
    thumbnailWidth: 500,
    thumbnailHeight: 719
  },

  {
    src:
      "https://images.unsplash.com/photo-1507838175923-5689c9e3f527?ixlib=rb-0.3.5&s=4b7316b9854e1113842808a706e5f584&auto=format&fit=crop&w=1500&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1507838175923-5689c9e3f527?ixlib=rb-0.3.5&s=4b7316b9854e1113842808a706e5f584&auto=format&fit=crop&w=1500&q=80",
    thumbnailWidth: 7930,
    thumbnailHeight: 5289
  },

  {
    src:
      "https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&s=79070bda908b13b723e1663afa969da4&auto=format&fit=crop&w=1493&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1495900158145-fa1e1786861b?ixlib=rb-0.3.5&s=79070bda908b13b723e1663afa969da4&auto=format&fit=crop&w=1493&q=80",
    thumbnailWidth: 5000,
    thumbnailHeight: 2800
  },

  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cologne_-_Panoramic_Image_of_the_old_town_at_dusk.jpg",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cologne_-_Panoramic_Image_of_the_old_town_at_dusk.jpg",
    thumbnailWidth: 7000,
    thumbnailHeight: 1000
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }
];

var imagez = [
  {
    id: "a2e186da-390f-4971-9a72-5b4ba65342f4",
    caption: "",
    url: "https://image.zpcdn.net/a2e186da-390f-4971-9a72-5b4ba65342f4.jpeg"
  }
];

class PhotoGrid extends Component {
  state = { images: [] };

  componentWillReceiveProps(newProps) {
    console.log("New Props", newProps);
    var imageResult = newProps.images.map(imageBlock => ({
      src: imageBlock.url,
      thumbnail: imageBlock.url,
      thumbnailWidth: imageBlock.width,
      thumbnailHeight: imageBlock.height,
      caption: imageBlock.caption
    }));
    this.setState({ images: imageResult });
  }

  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default PhotoGrid;
