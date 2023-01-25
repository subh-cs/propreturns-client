import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_HOUSES } from "@/Helper/queries";

const Hero = () => {
  // const [houses, setHouses] = useState([]);
  let { loading, error, data } = useQuery(GET_HOUSES);
  data = data?.houses;
  // setHouses(data);
  console.log(data);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-2 justify-center items-start w-full py-4 px-4">
      <div className="lg:w-6/12 w-full lg:h-screen overscroll-auto overflow-x-scroll lg:overflow-y-scroll  lg:border-none rounded-2xl">
        <div className="grid grid-rows-1 grid-flow-col lg:grid-cols-2 lg:grid-flow-row gap-4 items-center justify-center mx-5">
          {data?.map((house) => (
            <div className="w-80 h-72 bg-gray-200 rounded-2xl flex flex-col justify-start items center">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg"
                className="w-full h-3/6 rounded-2xl"
              ></img>
              <div className="flex flex-col justify-between items-start w-full h-3/6">
                <div className="mx-2">
                  <div className="text-2xl font-semibold mt-2">
                    ${house.price - 800}K
                  </div>
                  <div>{house.address}</div>
                </div>
                <div className="w-full">
                  <div className="flex justify-between items-center m-5">
                    <div className="btn p-2 flex justify-center items-center gap-2">
                      <img src="/bed.svg" width="20"></img>
                      <div className="text-sm">2</div>
                    </div>
                    <div className="btn p-2 flex justify-center items-center gap-2">
                      <img src="/bathtub.svg" width="20"></img>
                      <div className="text-sm">2</div>
                    </div>
                    <div className="btn p-2 flex justify-center items-center gap-2">
                      <img src="/toilet.svg" width="20"></img>
                      <div className="text-sm">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-96 lg:w-6/12 lg:h-screen ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
          width="600"
          height="450"
          frameborder="0"
          className="w-full h-full rounded-2xl border-4 py-4 px-4"
          // style="border:0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
