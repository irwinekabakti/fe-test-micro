"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_CAR_BY_ID } from "@/graphql/queries";
import { useParams } from "next/navigation";

const CarDetail: React.FC = () => {
  const { id } = useParams(); // Use useParams to get route parameters

  // Ensure id is available and valid before making the query
  const { data, loading, error } = useQuery(GET_CAR_BY_ID, {
    variables: { id },
    skip: !id, // Skip the query if id is not available
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const car = data?.getCarById;

  return (
    <div>
      <h1>
        {car?.brand} {car?.model}
      </h1>
      <img src={car?.image} alt={car?.model} />
      <p>Year: {car?.year}</p>
    </div>
  );
};

export default CarDetail;
