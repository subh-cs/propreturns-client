import { useQuery, gql } from "@apollo/client";

export const GET_HOUSES = `
  query GetHouses {
    houses {
      address
      price
      id
      noOfBed
      noOfBathTub
      noOfToilet
    }
  }
`;

export const GET_HOUSE = `
query getSingleHouse($id: ID!) {
  house(id: $id) {
    id
    price
    address
    noOfBed
    noOfBathTub
    noOfToilet
  }
}
`;

export const ADD_HOUSE = gql`
  mutation AddHouse(
    $address: String!
    $price: String!
    $noOfBed: String!
    $noOfBathTub: String!
    $noOfToilet: String!
  ) {
    addHouse(
      address: $address
      price: $price
      noOfBed: $noOfBed
      noOfBathTub: $noOfBathTub
      noOfToilet: $noOfToilet
    ) {
      address
      price
      id
      noOfBed
      noOfBathTub
      noOfToilet
    }
  }
`;

export const DELETE_HOUSE = gql`
  mutation DeleteHouse($id: ID!) {
    deleteHouse(id: $id) {
      id
    }
  }
`;

export const UPDATE_HOUSE = gql`
  mutation UpdateHouse(
    $id: ID!
    $address: String!
    $price: String!
    $noOfBed: String!
    $noOfBathTub: String!
    $noOfToilet: String!
  ) {
    updateHouse(
      id: $id
      address: $address
      price: $price
      noOfBed: $noOfBed
      noOfBathTub: $noOfBathTub
      noOfToilet: $noOfToilet
    ) {
      address
      price
      id
      noOfBed
      noOfBathTub
      noOfToilet
    }
  }
`;
