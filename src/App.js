import React from "react";

import './App.css';
import './styles/styles.css';
import popularDestinations from "./components/popularDestinations";
import DestinationCard from "./components/DestinationCard";
import TextOnImage from "./components/TextOnImage";
import ToiData from "./components/ToiData";
// import Card from "./components/carouselCard";
import CarouselCard from "./components/CarouselCard";
import HotelDetails from "./components/HotelDetails";
import HotelData from "./components/HotelData";
import uspData from "./components/uspData";
import Card from "./components/uspCards";
import Form from "./components/searchForm";

export default function App() {
  return (
   
    <div>

      {/* <div className="bg-gray-100 grid  lg:grid-cols-2 2xl:grid-cols-5"  >
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-2 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img className="h-10" src="https://media.umbraco.io/telehotelholidays/5red1mpj/layer-98.png?w=256" alt="Workcation" />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
              src="https://github.com/tailwindlabs/tailwindcss-from-zero-to-production/blob/main/06-extracting-reusable-components/img/beach-work.jpg?raw=true"
              alt="Woman workcationing on the beach"
            />
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              It Matters
              <br className="hidden lg:inline" /> <span className="text-indigo-500">Where You Stay.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="inline-block px-3 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-800 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
                href="#"
              >
                Book your escape
              </a>
            </div>
          </div>
        </div>
        <div className="hidden relative lg:block 2xl:col-span-3">
          <img
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="https://images.unsplash.com/photo-1559305289-4c31700ba9cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div> */}

<div className="banner xs:h-[150px] sm:h-[250px] md:h-[250px] lg:h-[550px] bg-[url('https://images.unsplash.com/photo-1629286521404-77161a73af35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-center bg-cover bg-fixed bg-no-repeat text-center">
<h1 className="max-w-md sm:max-w-xl lg:max-w-6xl ml-20 px-8 pb-2 lg:px-12  pt-[200px] text-5xl text-white">Luxury Holidays Destinations</h1>
<p className="text-xl text-white">It Matters Where You Stay. </p>
<div className="mt-2">
   
      <div className="xs:min-h-[50px] sm:min-h-[250px] md:min-h-[450px] lg:min-h-[550px]  justify-center items-center ">
<div className="banner lg:min-h-[550px]  bg-[url('https://images.unsplash.com/photo-1629286521404-77161a73af35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-center bg-cover  bg-no-repeat">
  <div className="my-auto">
<h1 className="max-w-md sm:max-w-xl lg:max-w-6xl sm:text-lg md:text-2xl lg:text-5xl text-white ">Luxury Holidays Destinations</h1>
<p className="text-xl text-white">It Matters Where You Stay! </p>
<div className="mt-2 pb-10">
<Form/>
</div>
</div>
</div></div>

{/* USP section */}
<div className="max-w-md sm:max-w-xl lg:max-w-7xl mx-auto px-8 lg:px-12 py-8 ">
<div className="mt-2 grid gap-6 lg:grid-cols-2 xl:grid-cols-5">
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
<nav class=" bg-transparent border-gray-200 container ">
  <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
    <a href="#" class="flex items-center">
        <img src="https://media.umbraco.io/telehotelholidays/5red1mpj/layer-98.png" class="h-8 md:h-10 " alt="Logo" />
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

<div className="banner mt-[-100px] h-[200px] sm:h-[250px] md:h-[250px] lg:h-[580px] bg-[url('https://images.pexels.com/photos/12858513/pexels-photo-12858513.jpeg')] bg-center bg-cover bg-no-repeat justify-start items-center flex">

{/* <div className="form max-w-sm md:max-w-xl lg:max-w-7xl container">
</div> */}
  <div className="Hero max-w-sm sm:max-w-xl lg:max-w-7xl md:ml-32 ml-4 flex flex-col md:h-48 py-2 md:py-2 md:px-10 px-5 md:mt-12 mt-1 justify-center items-start bg-sky-950 rounded overflow-hidden shadow">
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

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">

        <h2 className="text-2xl text-gray-900">Popular destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {popularDestinations.map((dest) => (
            <DestinationCard dest={dest} key={dest.city} />
          ))}
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-2xl text-gray-900">Trending destinations</h2>
        <p className="mt-2 text-gray-600">A selection of great work-friendly cities with lots to see and explore.</p>
      <div className="mt-6 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {ToiData.map((Toi) => (
            <TextOnImage Toi={Toi} key={Toi.country} />
          ))}
        </div>
        </div>

        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
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
  );
}