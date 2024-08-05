import React from "react";
import ApolloProvider from "@/graphql/ApolloProvider";

interface HomeProps {
  children: React.ReactNode;
}

const layout: React.FC<HomeProps> = ({ children }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};

export default layout;
