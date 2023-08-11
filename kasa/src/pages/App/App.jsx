import React from "react";
// import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import SectionAppartement from "../../components/SectionAppartement/SectionAppartement.jsx";
// import Footer from "../Footer/Footer.jsx";

import "./App.scss";

function App() {
  return (
    <div>
      <Banner image="../../src/assets/banner.png" />
      <SectionAppartement />
    </div>
  );
}

export default App;
