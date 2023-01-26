import axios from "axios";
import { GET_HOUSES, GET_HOUSE } from "./Helper/queries";
// import { DELETE_HOUSE } from "./Helper/queries";

const BaseUrl = "http://localhost:3001/graphql";

export const getAllHouseData = async () => {
  const response = await axios({
    url: BaseUrl,
    method: "post",
    data: {
      query: GET_HOUSES,
    },
  });
  return response.data.data.houses;
};

export const getSingleHouseData = async (id) => {
  const response = await axios({
    url: BaseUrl,
    method: "post",
    data: {
      query: GET_HOUSE,
      variables: {
        id: id,
      },
    },
  });
  return response.data.data.house;
};
