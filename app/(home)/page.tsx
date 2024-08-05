"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import axios from "axios";
import { GET_ALL_CARS, GET_CAR_BY_ID } from "@/graphql/queries";

const Home: React.FC = () => {
  // const [fetchData, setFetchData] = useState("");
  const { loading, error, data } = useQuery(GET_ALL_CARS);

  // const id = "7"; // Example ID, replace with dynamic value if necessary

  // const { loading, error, data } = useQuery(GET_CAR_BY_ID, {
  //   variables: { id },
  // });

  // const getFetchData = async () => {
  //   try {
  //     const { data }: any = await axios.get(
  //       "http://localhost:8080/api/v1/cars"
  //     );
  //     setFetchData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   getFetchData();
  // }, []);

  // console.log(fetchData, "<== using rest api");

  console.log(data?.getAllCars, "<=== using graphQL");
  // console.log(data?.getCarById, "<=== using GraphQL by id");

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default Home;
