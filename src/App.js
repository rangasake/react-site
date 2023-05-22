import React from "react";

import popularDestinations from "./components/popularDestinations";
import DestinationCard from "./components/DestinationCard";
import TextOnImage from "./components/TextOnImage";
import ToiData from "./components/ToiData";
// import Card from "./components/carouselCard";
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