import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { DELETE_HOUSE } from "@/Helper/queries";
import Modal from "./Modal";
import Map from "./Map";

const Hero = ({ houseData, triggerHandler }) => {
  const [EditModal, setEditModal] = useState(false);
  const [ID, setId] = useState("");
  let [deleteHouse, { data }] = useMutation(DELETE_HOUSE);

  const DeleteHandler = (e) => {
    console.log(e.target.id);
    deleteHouse({ variables: { id: e.target.id } }).then((res) => {
      console.log("House Deleted", res);
      triggerHandler();
    });
  };

  const openEditModal = (e) => {
    console.log(e.target.id);
    setId(e.target.id);
    setEditModal(true);
  };
  const closeEditModal = () => {
    triggerHandler();
    setEditModal(false);
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-2 justify-center items-start w-full py-4 px-4">
        <div className="lg:w-6/12 w-full lg:h-screen overscroll-auto overflow-x-scroll lg:overflow-x-hidden lg:overflow-y-scroll lg:border-none rounded-2xl">
          <div className="grid grid-rows-1 grid-flow-col lg:grid-cols-2 lg:grid-flow-row gap-4 mx-5">
            {houseData?.map((house, index) => (
              <div
                key={index}
                className="h-80 w-80 bg-gray-200 rounded-2xl flex flex-col justify-start items center"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
                  className="w-full h-3/6 rounded-2xl"
                ></img>
                <div className="flex flex-col justify-between items-start w-full h-3/6">
                  <div className="flex justify-between items-center w-full px-3">
                    <div className="">
                      <div className="text-2xl font-semibold mt-2">
                        ${house.price}K
                      </div>
                      <div>{house.address}</div>
                    </div>
                    <div className="flex gap-5">
                      <div
                        id={house.id}
                        className="btn p-2"
                        onClick={openEditModal}
                      >
                        <img id={house.id} src="/edit.svg" width={25}></img>
                      </div>
                      <div
                        id={house.id}
                        className="btn p-2"
                        onClick={DeleteHandler}
                      >
                        <img id={house.id} src="/trash.svg" width={25}></img>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center m-5">
                      <div className="btn p-2 flex justify-center items-center gap-2">
                        <img src="/bed.svg" width="20"></img>
                        <div className="text-sm">{house.noOfBed}</div>
                      </div>
                      <div className="btn p-2 flex justify-center items-center gap-2">
                        <img src="/bathtub.svg" width="20"></img>
                        <div className="text-sm">{house.noOfBathTub}</div>
                      </div>
                      <div className="btn p-2 flex justify-center items-center gap-2">
                        <img src="/toilet.svg" width="20"></img>
                        <div className="text-sm">{house.noOfToilet}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-96 lg:w-6/12 lg:h-screen">
          <Map />
        </div>
      </div>
      {EditModal && (
        <Modal
          houseId={ID}
          handler={closeEditModal}
          triggerHandler={triggerHandler}
        />
      )}
    </>
  );
};

export default Hero;
