import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { useGlobalContext } from "./Context";
import Loading from "./Components/Loading";
import SingleMovie from "./Pages/SingleMovie";

const App = () => {
  return (
    <>
      <section className="section">
        <div className="section-center">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/SingleMovie/:id" element={<SingleMovie />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </Router>
        </div>
      </section>
    </>
  );
};

export default App;
