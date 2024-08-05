"use client";

import { useQuery } from "@apollo/client";
import { GET_ALL_CARS, GET_CAR_BY_ID } from "@/graphql/queries";
import MediaCard from "../_components/(shared)/Card/Card";
import { Car } from "@/types/type";
import MediaCardSkeleton from "../_components/(shared)/Skeleton/Skeleton";
import { Container, Grid } from "@/styles/style";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CARS);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container>
      <Grid>
        {/*  <div className="my-8">
       <div className="mx-4 md:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
        {loading
          ? Array.from({ length: 12 }).map((_, index) => (
              <MediaCardSkeleton key={index} />
            ))
          : data?.getAllCars.map((item: Car) => (
              <MediaCard key={item.id} car={item} />
            ))}
        {/*    </div>
    </div> */}
      </Grid>
    </Container>
  );
};

export default Home;
