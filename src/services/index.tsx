import { request, gql } from "graphql-request";
const MASTER_URL =
  "https://api-eu-west-2.hygraph.com/v2/clmwf4byi14pd01upd4zkdkx3/master";
export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carBrand
        carType
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
export const getStoreLocations = async () => {
  const query = gql`
    query StoresLocations {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
