import React from "react";
import SearchForm from "../Components/SearchForm";
import Movies from "../Components/Movies";
import Loading from "../Components/Loading";
import { useGlobalContext } from "../Context";

const Home = () => {
  return (
    <>
      <SearchForm />
      <Movies />
    </>
  );
};

export default Home;
