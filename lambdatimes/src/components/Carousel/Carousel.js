import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      currentIndex: '',
      maxIndex2: '',
    }

  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData,
      currentIndex: 0,
    });
  this.maxIndex =  carouselData.length - 1 ;
  this.maxIndex2 =  this.state.carouselImages.length - 1;
  console.log('CDM DONE');
  }


  // USE setState here with prevState, simple increment/decrement
  leftClick = () => {
    this.state.currentIndex === 0
      ? this.setState({currentIndex:  this.maxIndex })
      : this.setState(prevState => {
        return {currentIndex: prevState.currentIndex - 1}
      }) ;
   // console.log('inside of left, currentIndex changed to ', this.state.currentIndex);
  };

  rightClick = () => {
    this.state.currentIndex === this.maxIndex
      ? this.setState({currentIndex: 0})
      : this.setState(prevState => {
        return {currentIndex: prevState.currentIndex + 1}
      });
   // console.log('inside of right, currentIndex changed to ', this.state.currentIndex);
  };

  selectedImage = () => {
    return <img
      src={this.state.carouselImages[this.state.currentIndex]}
      style={{display: 'flex'}}
      alt = {this.state.currentIndex}
    />
  };

  render(){
    console.log("maxIndex2", this.maxIndex2);
    console.log('carousel images length', this.state.carouselImages.length);

    return (
      <div className="carousel"   >
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}