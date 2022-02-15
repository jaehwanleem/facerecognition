import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import Facerecognition from './components/Facerecognition/Facerecognition';
import PositionDescribe from './components/PositionDescribe/PositionDescribe';

const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: 'd4ec7578f7e34610a93fc34f000718d8'
});







class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: 'https://samples.clarifai.com/face-det.jpg',
      position: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {

    this.setState({ imageURL: this.state.input })
    console.log('click');

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(

      function (response) {

        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function (err) {

      }
    );

  }


  render() {

    const particlesInit = (main) => {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };


    return (
      <div className="App">
        <div>
          <Particles className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
              background: {
                color: {
                  value: "#0d47a1",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 200,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />

          <Navigation />
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />

          <Facerecognition imageURL={this.state.imageURL} />
          <PositionDescribe />



        </div>


      </div>
    )
  };
}

export default App;
