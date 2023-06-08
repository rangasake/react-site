import React from "react";

import './App.css';
import './styles/styles.css';
import popularDestinations from "./components/popularDestinations";
import DestinationCard from "./components/DestinationCard";
import TextOnImage from "./components/TextOnImage";
import ToiData from "./components/ToiData";
import CarouselCard from "./components/carouselCard";
import HotelDetails from "./components/HotelDetails";
import HotelData from "./components/HotelData";
import uspData from "./components/uspData";
import Card from "./components/uspCards";
import Form from "./components/searchForm";
import MultCardCarousel from "./components/MultCardCarousel";
// import CarouselDeatils from "./components/CarouselDeatils";
import { ArrowRightOutlined  } from '@ant-design/icons';
import Tab from "./components/tab";
import Image from "./components/ImgR";
// import Form from "./components/Form";
// import Navbar from "./components/NewNavBar";


export default function App() {
  return (
    <>
      {/* <Navbar/> */}
<nav class=" bg-transparent shadow-inner border-gray-200 container ">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
    <a href="#" class="flex items-center">
        <img src="https://media.umbraco.io/telehotelholidays/5red1mpj/layer-98.png" class="h-8 md:h-10  ml-4" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">

      <ul class="font-semibold text-white text-base drop-shadow-xl flex flex-col p-4  md:py-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
        <li>    <Form/>
</li>
        <li>
          <a href="#destinations" class="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent  md:p-0 " aria-current="page">Destinations</a>
        </li>
        <li>
          <a href="#deals" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Holidays</a>
        </li>
        <li>
          <a href="#hotels" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Hotels</a>
        </li>
        
        <li>
          <a href="#" class="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
         
        </li>
        <li>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center text-sm text-black rounded-lg  hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200  dark:focus:ring-sky-600 hover:focus:ring-sky-500" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6 fill-black" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
          </li>
      </ul>
    </div>
  </div>
</nav>

<div className="banner  mt-[-100px] h-[280px] sm:h-[250px] md:h-[250px] lg:h-[580px] bg-[url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg')] bg-center bg-cover bg-no-repeat justify-start items-center flex">

{/* <div className="form max-w-sm md:max-w-xl lg:max-w-7xl container">
</div> */}
  <div className="Hero max-w-sm sm:max-w-xl lg:max-w-7xl md:ml-32 ml-4 flex flex-col md:h-48 py-2 md:py-2 md:px-10 px-5 md:mt-24 mt-16 justify-center items-start bg-sky-950 rounded overflow-hidden shadow">
<h1 className=" text:lg md:text-5xl text-white py-2 ">Luxury Holidays Destinations</h1>
<p className=" text-sm md:text-xl text-white py-[0.5%]">It matters where you stay! </p>
<button class=" text-white mt-1 text-xs md:text-sm md:mt-4"><a href="#destinations">Explore</a> <ArrowRightOutlined className="mt-1"/></button>
<div className="">
{/* <Form/> */}

</div>
</div>
</div>

{/* USP section */}
<div className="max-w-md sm:max-w-xl lg:max-w-7xl mx-auto px-8 lg:px-12 md:py-6  py-2">
<div className="mt-1 md:mt-2 grid gap-3 md:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5">
          {uspData.map((Ssp) => (
            <Card Ssp={Ssp} key={Ssp.uspTitle} />
          ))}
        </div>
        </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" id="destinations">

        <h2 className="text-2xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((dest) => (
            <DestinationCard dest={dest} key={dest.city} />
          ))}
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-2xl text-gray-900">Inspiring culture around the world</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>


      <div className="mt-6 grid gap-4 grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {ToiData.map((Toi) => (
            <TextOnImage Toi={Toi} key={Toi.country} />
          ))}
        </div>
        </div>

        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" id="hotels">
        <h2 className="text-2xl text-gray-900">Top Hotel Stays</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>

          <div className="">
{/* 
            First hotel deal */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {HotelData.map((HotelData) => (
            <HotelDetails HotelData={HotelData} key={HotelData.HoteName} />
          ))}
            </div>
{/* First hotel deals end */}



            {/* <div>
            <Card/>
            </div>
            <div>
            <Card/>
            </div> */}
          </div>
          
        </div>
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" id="deals">
          <h2 className="text-2xl text-gray-900">Top Holidays Packages</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
          <div className=" mt-6">
            {/* {CarouselDeatils.map((CarouselDeatils) => (
            <MultCardCarousel CarouselDeatils={CarouselDeatils} key={CarouselDeatils.Title} />
          ))} */}
          <MultCardCarousel/>
            </div>
            </div>


            <div className=" max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8" id="pack">
            <h2 className="text-2xl text-gray-900">Top cultural sights you can't miss</h2>
        <p className="mt-2 mb-6 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
<CarouselCard/>
</div>
        <div className=" max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <Tab/>
        </div>
<div className="m-14">

<Image/>


</div>
    </>
  );
}