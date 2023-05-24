import React from "react";
import { Carousel } from 'antd';

const contentStyle = {
  height: '200px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Card = ( {HotelData} ) => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img  src={HotelData.Hotelimg1}/></h3>
    </div>
    <div>
      <h3 style={contentStyle}> <img src={HotelData.Hotelimg2}/> </h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={HotelData.Hotelimg2}/></h3>
    </div>
    
  </Carousel>
);
export default Card;
