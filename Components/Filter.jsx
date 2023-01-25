import React from "react";
import Dropdown from "./Dropdown";

const Filter = () => {
  return (
    <div className="w-screen py-4 px-4 mt-4">
      <div className="flex justify-center items-center gap-4 mx-6">
        <div className="w-full">
          <input
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Search"
            required
          ></input>
        </div>
        <Dropdown heading="Dropdown"></Dropdown>
        <Dropdown heading="Dropdown"></Dropdown>
        <Dropdown heading="Dropdown"></Dropdown>
        <Dropdown heading="Dropdown"></Dropdown>
        <Dropdown heading="Dropdown"></Dropdown>
        <Dropdown heading="Dropdown"></Dropdown>
      </div>
    </div>
  );
};

export default Filter;
