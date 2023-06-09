import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/ranga";
import CardData from "../components/CardData";


export default function CarouselCard () {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  


const Ranga = CardData.map((CardData) => <Card
 country={CardData.country} 
 destination={CardData.destination} 
 rating={CardData.rating} 
 imageUrl={CardData.imageUrl} 
 /> );

  return (
<Carousel responsive={responsive} 
swipeable={true}
draggable={true}
showDots={false}
centerMode={false}
ssr={true} // means to render carousel on server-side.
infinite={true}
autoPlay={true}
autoPlaySpeed={3000}
keyBoardControl={true}
transitionDuration={500}
>
  {Ranga}
</Carousel>

  );

}