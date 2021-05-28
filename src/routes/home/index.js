import React from "react";
import FoodItem from "../../components/food-item";
import Footer from "../../components/footer";
// import { useQuery } from "@apollo/client";
// import { getRates } from "./queries/getRates";
import Header from "../../components/header";
import Hero from "../../components/hero";
import Loader from "../../components/loader";
import ShowCase from "../../components/showcase";

const Home = () => {
  // const { loading, error, data } = useQuery(getRates);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // return data.rates.map(({ currency, rate }) => (
  //   <Header
  //   <div key={currency}>
  //     <p>
  //       {currency}: {rate}
  //     </p>
  //   </div>
  // ));
  return (
    <div>
      <Header />
      <Hero />
      <ShowCase />
      <Footer />
      <FoodItem
        image={"food-1.jpeg"}
        title="Vegetable Salada on Plate"
        price="16"
      />
      <Loader />
    </div>
  );
};

export default Home;
