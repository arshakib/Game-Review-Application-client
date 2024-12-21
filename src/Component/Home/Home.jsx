import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
import Faq from "./Faq";
import Hero from "./Hero";
import Custome from "./Custome";

const Home = () => {
  const reviewData = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <Cards reviewData={reviewData}></Cards>
      <Faq></Faq>
      <Custome></Custome>
    </div>
  );
};

export default Home;
