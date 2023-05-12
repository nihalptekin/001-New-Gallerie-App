import React from "react";
import Homepage from "./pages/Homepage";
import data from "../src/helper/data";
// import Picture from "../src/components/Picture";

function App() {
  return (
    <div >
  <Homepage data={data}/>

    </div>
  );
}

export default App;
