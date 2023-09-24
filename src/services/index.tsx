import { request, gql } from "graphql-request";
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
  const result = await request(
    "https://api-eu-west-2.hygraph.com/v2/clmwf4byi14pd01upd4zkdkx3/master",
    query
  );
  return result;
};
