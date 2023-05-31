import React from 'react'
import { EnvironmentOutlined, ArrowRightOutlined  } from '@ant-design/icons';
import { Carousel, Col, Row } from 'antd';


export default function HotelDetails( { HotelData }) {
    const contentStyle = {
        height: '200px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        overflow: 'hidden',
      };
  return (
    
    <Row
    gutter={{
      xs: 8,
      sm: 16,
      md: 24,
      lg: 32,
    }}
  >
          <Col className="gutter-row" span={24}>

<div className="hover:bg-sky-500 hover:ring-sky-500 hover:text-white hover:rounded-[10px] ">
<p className='justify-self-end inline-block rounded p-1 text-white  ribbon'> <span className='text-xl'>$249 PP</span> </p>

<Carousel autoplay
  removeArrowOnDeviceType={["tablet", "mobile"]}
>
    <div className='shadow-lg '>
      <h3 style={contentStyle}><img className='h-[100%] w-[100%]' src={HotelData.Hotelimg1}/></h3>
    </div>
    <div className='shadow-lg'>
      <h3 style={contentStyle}> <img className='h-[100%] w-[100%]' src={HotelData.Hotelimg2}/> </h3>
    </div>
    <div className='shadow-lg'>
      <h3 style={contentStyle}><img className='h-[100%] w-[100%]' src={HotelData.Hotelimg3}/></h3>
    </div>
    
  </Carousel>
  <div className='border-2 border-gray border-t-0 px-2 pt-4 pb-3 rounded  hover:border-0 '>
              <h3 className="text-2xl mb-2">{HotelData.HoteName}</h3>
              <div>
                <ul>
                  <li className="flex mb-1" ><svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg> <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg> <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-300"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        />
      </svg> <img className="w-4 h-4 ml-1" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"/> <svg className=" fill-green-600 mt-1 mr-1" viewBox="0 0 128 24" width="68" height="12" aria-label=""><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform=""></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(26 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(52 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(78 0)"></path><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" transform="translate(104 0)"></path></svg> <small>{HotelData.HotelReviwes} reviews</small></li>
      <li className="mb-1"><EnvironmentOutlined/> <span className="">{HotelData.HotelLoc}</span></li>
<ul className="list-disc list-inside"><li className="text-xs">{HotelData.HotelFacilities1}</li>
      <li className="text-xs">{HotelData.HotelFacilities2}</li>
      <li className="text-xs">{HotelData.HotelFacilities3}</li></ul>
                </ul>
                <p className="text-sm mt-4">See all deatils <ArrowRightOutlined /> </p>
              </div>
            </div>
            </div>
            </Col>
            </Row>


  );
}

