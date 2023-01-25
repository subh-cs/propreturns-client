import { useQuery, gql } from '@apollo/client';

export const GET_HOUSES = gql`
  query GetHouses {
    houses {
      address
      price
    }
  }
`;