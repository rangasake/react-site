import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Space } from 'antd';
import { ArrowRightOutlined  } from '@ant-design/icons';

const { Meta } = Card;



  export default function MultCardCarousel( CarouselDeatils) {

    const responsive = {

      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
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
const style ={
marginRight: '10px',
};

const cardCover = {
  overflow: "hidden", height: "200px"
};

  return (
    <Carousel 
    responsive={responsive}
    swipeable={true}
  draggable={true}
  showDots={false}
  centerMode={true}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={3000}
  keyBoardControl={true}
  // customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-0-px"
    >
      <div>
      <Card
    hoverable
    style={style}
    cover={
      <div style={cardCover}>
      <img
        alt={CarouselDeatils.Title}
        src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
      />
    </div>
     }
  >
    <Meta style={{ fontSize: '15px', color: 'black'}} title="San Diego" description={[
         <div className=''>
          <Space>
             <p>Package holidays to San Diego</p>
             <p style={{ color: 'black', fontSize: '15px', }}>$234 PP</p>
             </Space>
             <p className='mt-2' style={{ color: 'black', fontSize: '14px', }} >View deal <ArrowRightOutlined /> </p>
          </div>
        ]}/> 
  </Card>
      </div>


      <div>
      <Card
    hoverable
    style={style}
    cover={
      <div style={cardCover}>
      <img
        alt={CarouselDeatils.Title}
        src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
    </div>
     }
  >
    <Meta style={{ fontSize: '15px', color: 'black'}} title="Santa Monica" description={[
         <div className=''>
          <Space>
             <p>Package holidays to Santa Monica</p>
             <p style={{ color: 'black', fontSize: '15px', }}>$244 PP</p>
             </Space>
             <p className='mt-2' style={{ color: 'black', fontSize: '14px', }} >View deal <ArrowRightOutlined /> </p>
          </div>
        ]}/> 
  </Card>
      </div>



      <div>
      <Card
    hoverable
    style={style}
    cover={
      <div style={cardCover}>
      <img
        alt={CarouselDeatils.Title}
        src="https://images.unsplash.com/photo-1558281050-4c33200099c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
    </div>
     }
  >
    <Meta style={{ fontSize: '15px', color: 'black'}} title="Fuvahmulah" description={[
         <div className=''>
          <Space>
             <p>Package holidays to Fuvahmulah</p>
             <p style={{ color: 'black', fontSize: '15px', }}>$134 PP</p>
             </Space>
             <p className='mt-2' style={{ color: 'black', fontSize: '14px', }} >View deal <ArrowRightOutlined /> </p>
          </div>
        ]}/> 
  </Card>
      </div>



      <div>
      <Card
    hoverable
    style={style}
    cover={
      <div style={cardCover}>
      <img
        alt={CarouselDeatils.Title}
        src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
    </div>
     }
  >
    <Meta style={{ fontSize: '15px', color: 'black'}} title="Paphos" description={[
         <div className=''>
          <Space>
             <p>Package holidays to Paphos</p>
             <p style={{ color: 'black', fontSize: '15px', }}>$314 PP</p>
             </Space>
             <p className='mt-2' style={{ color: 'black', fontSize: '14px', }} >View deal <ArrowRightOutlined /> </p>
          </div>
        ]}/> 
  </Card>
      </div>

    </Carousel>
    

  );
};
