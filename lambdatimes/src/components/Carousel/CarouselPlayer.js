import React, { Component } from 'react';
import { carouselData } from '../../data'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';


// Complete this Carousel 
export default class CarouselPlayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex: '',
      items: [],
    }
  }
  componentDidMount(){
    this.setState(
      {
        activeIndex: Number(0),
        items: carouselData,
      })
  }

  onExiting = () => {this.animating = true};

  onExited = () => {this.animating = false};

  next = () => {
    if (this.animating) return;
    const nextIndex = Number(this.state.activeIndex) === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex = Number(this.state.activeIndex) === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };


  render() {
    console.log('CarouselIMG >>> ', this.state.items);


    const { activeIndex } = this.state;
    const { items } = this.state;

    const slides = items.map((item) => {
      console.log('item is >>>>>> ', item);

      return (


        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item}
        >
          console.log("slides", slides);
          <img src = {item} alt={item} />

        </CarouselItem>


      );
    });

    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

  /*   HERE

        <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.state.carouselIMG} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>





   */







  /*
    leftClick = () => {

    };

    rightClick = () ={

    };
  /*
    selectedImage = () => {
      return <img src={} style={{display: 'block'}} />
    };

  render(){
    console.log('carousel IMG ', this.state.carouselIMG);
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }





}

*/