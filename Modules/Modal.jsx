import React, { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ADD_HOUSE, GET_HOUSE, UPDATE_HOUSE } from "../Helper/queries";
import axios from "axios";
import { getSingleHouseData } from "../api";

const Modal = ({ handler, houseId, triggerHandler }) => {
  const [Price, setPrice] = useState("");
  const [Address, setAddress] = useState("");
  const [Bed, setBed] = useState("");
  const [Bath, setBath] = useState("");
  const [Toilet, setToilet] = useState("");

  const [addProperty, { data }] = useMutation(ADD_HOUSE);
  const [updateProperty, { data: updateData }] = useMutation(UPDATE_HOUSE);

  useEffect(() => {
    const getSingleHouse = async () => {
      const response = await getSingleHouseData(houseId);
      setPrice(response.price);
      setAddress(response.address);
      setBed(response.noOfBed);
      setBath(response.noOfBathTub);
      setToilet(response.noOfToilet);
    };
    // if ID is not null then get single property
    if (houseId !== undefined) getSingleHouse();
  }, []);

  const submitHandler = () => {
    // if ID is null then add property
    if (houseId === undefined) {
      addProperty({
        variables: {
          price: Price,
          address: Address,
          noOfBed: Bed,
          noOfBathTub: Bath,
          noOfToilet: Toilet,
        },
      })
        .then((res) => {
          console.log(res);
          triggerHandler();
          handler();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // if ID is not null then update property
    else {
      updateProperty({
        variables: {
          id: houseId,
          price: Price,
          address: Address,
          noOfBed: Bed,
          noOfBathTub: Bath,
          noOfToilet: Toilet,
        },
      })
        .then((res) => {
          console.log(res);
          triggerHandler();
          handler();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div
        className="fixed z-10 overflow-y-auto top-0 w-full left-0"
        id="modal"
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="flex flex-col p-4">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price-section"
                >
                  Price (USD)
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price-section"
                  type="number"
                  value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="$ 1000"
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address-section"
                >
                  Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address-section"
                  type="text"
                  placeholder="33, Gandhinagar, Ahmedabad"
                  value={Address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div class="w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Bed
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="3"
                    value={Bed}
                    onChange={(e) => setBed(e.target.value)}
                  />
                </div>

                <div class="w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Bathtub
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="2"
                    value={Bath}
                    onChange={(e) => setBath(e.target.value)}
                  />
                </div>

                <div class="w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    Toilet
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="number"
                    placeholder="2"
                    value={Toilet}
                    onChange={(e) => setToilet(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={handler}
              >
                <i className="fas fa-times"></i> Cancel
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                onClick={submitHandler}
              >
                <i className="fas fa-plus"></i>{" "}
                {houseId === undefined ? "Create" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
