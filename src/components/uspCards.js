import React from "react";

export default function Card({ Ssp }) {
  return (
    <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden py-2 px-2 ">
      <img className="h-10 w-10 flex-shrink-0" src={Ssp.uspImg}  alt="heelo"/>
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold text-gray-800">{Ssp.uspTitle}</h3>
      </div>
    </div>
  );
}