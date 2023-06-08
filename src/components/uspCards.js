import React from "react";

export default function Card({ Ssp }) {
  return (
    <div className="flex items-center rounded-lg bg-white drop-shadow-md hover:shadow-xl overflow-hidden py-2 px-2 ">
<<<<<<< HEAD
      <img className="h-10 w-10 flex-shrink-0 " src={Ssp.uspImg}  alt="heelo"/>
=======
      <img className="h-10 w-10 flex-shrink-0 " src={Ssp.uspImg}  alt="hello"/>
>>>>>>> main
      <div className="px-4 py-2">
        <h3 className="text-sm font-semibold text-gray-800 hover:text-sky-500">{Ssp.uspTitle}</h3>
      </div>
    </div>
  );
}