import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/fix/Header";
import Contents from "./components/main/Contents";
import List from "./components/main/List";
import Footer from "./components/fix/Footer";

import PlayGround from "./components/main2/PlayGround";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Contents />
              <List />
            </div>
          }
        />
        <Route path="/Playground" element={<PlayGround />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
