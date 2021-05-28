import { useQuery } from "@apollo/client";
import React from "react";
import Currency from "../../components/currency";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Loader from "../../components/loader";
import ShowCase from "../../components/showcase";
import { getRates } from "./queries/getRates";

const Home = () => {
  const { loading, error, data } = useQuery(getRates);
  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <Header />
      <Hero />
      <ShowCase />
      <Currency />
      {data.rates.map(({ name, rate, currency }) => (
        <Currency key={name} name={name} rate={rate} currency={currency} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
