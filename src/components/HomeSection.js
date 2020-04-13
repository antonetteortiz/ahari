import React, { Component } from 'react';
import {
  Carousel,
 CarouselItem,
 CarouselControl,
 CarouselIndicators,
 CarouselCaption
} from 'reactstrap';

import pic1 from "../images/two-families-baby-carriers-walking-park-52855596.jpg"
import pic2 from "../images/pexels-photo-3584088.jpeg"
import pic3 from "../images/pexels-photo-935967.jpeg"

class HomeSection extends Component {
  constructor(){
    super();
    this.state = {
      animating: false,
      activeIndex: 0
    }

    this.setActiveIndex = this.setActiveIndex.bind(this);
  }
  setActiveIndex(activeIndex){
    this.setState({activeIndex})
  }

  old(){
    return (
      <span>
      <h1 className="cover-heading text-blush">Ahari Nannies</h1>
      <p className="lead text-green">Ahari is a booking platform that helps to connect parents and qualified caregivers. Offering training for caregivers to help futher their passions in providing quality and professional care.</p>
      <p className="lead text-blush">
        <a href="/home/vision" className="btn btn-lg btn-ahariGrey">Learn more</a>
      </p>
      </span>
    )
  }
  render() {
    const { animating, activeIndex } = this.state;
    const items = [
        {
          src: pic1,
          altText: 'Slide 1',
          caption: 'Slide 1'
        },
        {
          src: pic2,
          altText: 'Slide 2',
          caption: 'Slide 2'
        },
        {
          src: pic3,
          altText: 'Slide 3',
          caption: 'Slide 3'
        }
      ];


    const slides = items.map((item) => {
       return (
         <CarouselItem
           onExiting={() => this.setState({animating: true})}
           onExited={() => this.setState({animating: false})}
           key={item.src}
         >
           <img src={item.src} alt={item.altText} />
           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
         </CarouselItem>
       );
     });

    const next = () => {
       if (animating) return;
       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
       this.setState({activeIndex: nextIndex});
     }

   const previous = () => {
     if (animating) return;
     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
     // setActiveIndex(nextIndex);
     this.setState({activeIndex: nextIndex});

   }

   const goToIndex = (newIndex) => {
     if (animating) return;
     // setActiveIndex(newIndex);
     this.setState({activeIndex: newIndex});

   }

    const section = 'home';


    return (

      <main id='home' role="main" className="inner cover">
          <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}

          fluid
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>

      </main>

    );
  }
}


export default HomeSection;
