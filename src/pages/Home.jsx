import Countdown from "../components/Countdown";
import React from "react";
import Upcoming from "../components/Upcoming";

const Home = () => {
  return <>
   <div className="pt-100px"> 
   <Countdown/>
   <Upcoming/>
   </div>
  </>
}

export default Home ;