import React from "react";
import Menu from './Components/Menu'
import Mainpart from './Components/Mainpart'
import Typing from "./Components/Typing";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
         <Menu />
         <Typing />
        <Mainpart />
      <Newsletter />
      <Card />
      <Footer />

    </div>
  );
}



export default App;
