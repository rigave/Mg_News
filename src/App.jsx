import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar height={3} color="#fff" progress={progress} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pagesize={12} country="in" category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pagesize={12} country="in" category="business" />} />
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pagesize={12} country="in" category="entertainment" />}
            />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} pagesize={12} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} pagesize={12} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pagesize={12} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pagesize={12} country="in" category="technology" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
