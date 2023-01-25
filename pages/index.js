import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import Experiment from "@/Components/experiment";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const inter = Inter({ subsets: ["latin"] });

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-start overflow-hidden">
        <ApolloProvider client={client}>
          {/* <Navbar /> */}
          <Experiment/>
          <Filter />
          <Hero />
        </ApolloProvider>
      </div>
    </>
  );
}
