import { gql } from "@apollo/client";

const GET_ALL_CARS = gql`
  query GetAllCars {
    getAllCars {
      id
      brand
      model
      year
      image
    }
  }
`;

const GET_CAR_BY_ID = gql`
  query GetCarById($id: ID!) {
    getCarById(id: $id) {
      id
      brand
      model
      year
      image
    }
  }
`;

export { GET_ALL_CARS, GET_CAR_BY_ID };
