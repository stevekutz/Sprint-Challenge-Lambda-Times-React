import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      currentIndex: '',
      length: 0,
    }

  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData,
      currentIndex: 0,

    });

  this.length =  carouselData.length - 1 ;
  }


  // USE setState here with prevState, simple increment/decrement

  leftClick = () => {
    this.state.currentIndex === 0
      ? this.setState({currentIndex:  this.length - 1})
      : this.setState({currentIndex: this.state.currentIndex - 1}) ;

    console.log('inside of left, currentIndex changed to ', this.state.currentIndex);

   // this.selectedImage();
  };

  rightClick = () => {
    this.state.currentIndex === this.length
      ? this.setState({currentIndex: 0})
      : this.setState({currentIndex: this.state.currentIndex + 1});

    console.log('inside of right, currentIndex changed to ', this.currentIndex);

    this.selectedImage();
  };

  selectedImage = () => {
    return <img
      src={this.state.carouselImages[this.state.currentIndex]}
      style={{display: 'block'}}
      alt = {this.state.currentIndex}
    />
  };

  render(){
    console.log("something", this.length);

    return (
      <div className="carousel"   >
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}