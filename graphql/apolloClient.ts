// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:8080/graphql",
//   cache: new InMemoryCache(),
// });

// export default client;

// graphql/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:8080/graphql", // replace with your GraphQL endpoint
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
