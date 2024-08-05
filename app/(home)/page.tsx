"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_CARS, GET_CAR_BY_ID } from "@/graphql/queries";
import MediaCard from "../_components/(shared)/Card/Card";
import { Car } from "@/types/type";
import MediaCardSkeleton from "../_components/(shared)/Skeleton/Skeleton";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CARS);

  // console.log(data?.getAllCars, "<=== using graphQL");

  if (loading) return <MediaCardSkeleton />;

  return (
    <div className="my-8">
      {/* <h1>Test</h1> */}

      <div className="mx-4 md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* {data?.getAllCars.map((item: Car) => (
          <MediaCard key={item.id} car={item} />
        ))} */}

        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.getAllCars.map((item: Car) => (
              <MediaCard key={item.id} car={item} />
            ))}
      </div>
    </div>
  );
};

export default Home;
