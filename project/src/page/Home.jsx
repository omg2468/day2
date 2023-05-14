import React from "react";
import Header from "./Homecomponent/header";
import Aboutus from "./Homecomponent/Aboutus";
import Homenew from "./Homecomponent/Homenew";
import Swiper from "./Homecomponent/Swiper";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Header />
      <Aboutus />
      <Swiper/>
      <Homenew/>
    </div>
  );
}
