import Filter from "@/components/Filter";
import Hero from "@/components/Hero";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import { getAllHouseData } from "@/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql",
  cache: new InMemoryCache(),
});

export default function Home() {
  const [houseData, setHouseData] = useState([]);
  const [triggerApi, setTriggerApi] = useState(false);

  const triggerHandler = () => {
    setTriggerApi(!triggerApi);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await getAllHouseData();
      setHouseData(data);
    };
    fetch();
  }, [triggerApi]);
  
  return (
    <>
      <div className="flex flex-col items-center justify-start overflow-hidden">
        <ApolloProvider client={client}>
          <Navbar/>
          <Filter triggerHandler={triggerHandler} />
          <Hero houseData={houseData} triggerHandler={triggerHandler} />
          <Footer></Footer>
        </ApolloProvider>
      </div>
    </>
  );
}
