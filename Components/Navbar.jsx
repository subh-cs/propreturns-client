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

        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          width="50"
          height="50"
          className="rounded-full border-2 border-gray-600"
        ></img>
      </div>
    </>
  );
};

export default Navbar;
