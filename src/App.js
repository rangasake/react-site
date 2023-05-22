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
<div className="banner xs:h-[150px] sm:h-[250px] md:h-[250px] lg:h-[550px] bg-[url('https://images.unsplash.com/photo-1629286521404-77161a73af35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80')] bg-center bg-cover bg-fixed bg-no-repeat text-center">
<h1 className="max-w-md sm:max-w-xl lg:max-w-6xl ml-20 px-8 pb-2 lg:px-12  pt-[200px] text-5xl text-white">Luxury Holidays Destinations</h1>
<p className="text-xl text-white">It Matters Where You Stay! </p>
<div className="mt-2">
<Form/>

</div>

</div>

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

    </div>
  );
}