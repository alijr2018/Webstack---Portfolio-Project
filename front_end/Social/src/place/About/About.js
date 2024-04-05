import React from "react";
import AboutH from "./index.html";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchBar from "../utils/SearchBar";

function About() {
    return (
    <div className="About">
      <Header />
      {/* Render the HTML content */}
      <div dangerouslySetInnerHTML={{ __html: AboutH }} />
      <SearchBar header="Let's Find A Property That Meets Your Need" />
      <Footer />
    </div>
  );
}
export default About;