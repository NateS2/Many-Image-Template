import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

class HeroHeader extends Component {
  render() {
    return (
        <div>
            <LazyHero imageSrc="https://images.unsplash.com/photo-1511084901824-1c57f5a16c98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d99cf967bd2c40d8329e961e027cec97&auto=format&fit=crop&w=1950&q=80"
            parallaxOffset="100"
            color="#000000"
            opacity="0.1"
            className="App"
            >
                <h1 className="hero-text">Generic Startup Hype Headline</h1>
            </LazyHero>

            {/* ... */}
        </div>
    );
  }
};

export default HeroHeader;
