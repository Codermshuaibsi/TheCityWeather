import React from 'react';

const Box = ({ icon, temp }) => {
  return (
    <div className="flex m-10 text-2xl hover:text-3xl  hover:text-pink-600 cursor-pointer items-center gap-4 p-4 w-[200px] h-[70px] rounded-2xl border border-gray-600 bg-gray-800 text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
      <div className="text-3xl">{icon}</div>
      <div className=" font-bold">{temp}</div>
    </div>
  );
};

export default Box;
