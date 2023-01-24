import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-screen px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-start gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            width="30"
            height="30"
          ></img>
          <div className="text-3xl font-bold">RealEstate</div>
        </div>
        <div className="flex items-center justify-between gap-x-20">
          <div>Search</div>
          <div>About</div>
          <div>Help</div>
          <div>Contact</div>
        </div>
        <button
          type="button"
          class=" bg-white border border-gray-300 focus:outline-none p-2 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:text-white "
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
            width="30"
            height="30"
          ></img>
        </button>
      </div>
    </>
  );
};

export default Navbar;
