import React from "react";
// import Navbar from "../Navbar/Navbar.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import SectionAppartement from "../../components/SectionAppartement/SectionAppartement.jsx";
// import Footer from "../Footer/Footer.jsx";
import "./App.scss";

const bannerHomepage = ["../../src/assets/banner.png"];


function App() {
  return (
    <div>
      <div className="banner__container">
        <h1>Chez vous, partout et ailleurs</h1>
      <Banner images={bannerHomepage}/>
      </div>
      <SectionAppartement />
    </div>
  );
}

export default App;
