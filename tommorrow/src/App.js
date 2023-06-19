import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/fix/Header";
import Contents from "./components/main/Contents";
import List from "./components/main/List";
import Footer from "./components/fix/Footer";

import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Question1 from "./components/main2/question/Question1";
import Question2 from "./components/main2/question/Question2";
import Question3 from "./components/main2/question/Question3";
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

        {/*User*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Question1" element={<Question1 />} />
        <Route path="/Question2" element={<Question2 />} />
        <Route path="/Question3" element={<Question3 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
