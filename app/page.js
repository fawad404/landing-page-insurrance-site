import React from "react";
import Herosecond from "./components/herosecond/Herosecond";
import Herothird from "./components/herothird/Herothird";
import Informationthird from "./components/informationthird/Informationthird";
import Contactfourth from "./components/contactfourth/Contactfourth";
import Impressumfifth from "./components/impressumfifth/Impressumfifth";
import Datenschutz from "./components/datenschutz/Datenschutz";
import UserAppointment from "./components/userAppointment/UserAppointment";


const Home = () => {
  return (
    <>
    <Herosecond />
    <Herothird />
    <Informationthird />
    <Contactfourth />
    <Impressumfifth />
    <Datenschutz />
    <UserAppointment />
    </>
  );
};

export default Home;
