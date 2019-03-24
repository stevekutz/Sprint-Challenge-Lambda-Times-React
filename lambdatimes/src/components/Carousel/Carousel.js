import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      currentIndex: '',
    }
  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData,
      currentIndex: 0,


    })
  }

  leftClick = () => {

  };

  rightClick = () => {

  };

  selectedImage = () => {
    return <img
      src={this.state.carouselImages[this.state.currentIndex]}
      style={{display: 'block'}} />
  };

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}