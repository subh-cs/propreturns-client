import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

const Filter = ({ triggerHandler }) => {
  const [addModal, setAddModal] = useState(false);

  const ModalHandler = () => {
    setAddModal(!addModal);
  };

  return (
    <>
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
          <div
            onClick={ModalHandler}
            className="flex items-center justify-center gap-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 text-sm focus:ring-blue-300 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 px-6 py-2.5 cursor-pointer"
          >
            <img src="/plus.svg" width={20}></img>
            <div>Add</div>
          </div>
          <Dropdown heading="Dropdown"></Dropdown>
          <Dropdown heading="Dropdown"></Dropdown>
          <Dropdown heading="Dropdown"></Dropdown>
          <Dropdown heading="Dropdown"></Dropdown>
          <Dropdown heading="Dropdown"></Dropdown>
          <Dropdown heading="Dropdown"></Dropdown>
        </div>
      </div>
      {addModal && (
        <Modal handler={ModalHandler} triggerHandler={triggerHandler} />
      )}
    </>
  );
};

export default Filter;