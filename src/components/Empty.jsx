import React from "react";

const Empty = () => {
  return (
    <div className="flex flex-col space-y-5 items-center w-full h-full justify-center">
      <div className="w-10 h-10 flex items-center justify-center bg-yellow-300 rounded-full">
        <p className="font-black text-2xl">!</p>
      </div>
      <p className="text-white text-2xl">You don't have records </p>
    </div>
  );
};

export default Empty;
