import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";




function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) =>  res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container-fluid body">
        <Tracker />
      </div>
      <Footer />
    </div>
  );
}

export default App;
