import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
// import { ReactNodeConnect } from "./ReactNodeConnect";
// import { HomePage } from "./HomePage";
import { ResponsiveAppBar } from "./ResponsiveAppBar";

const apiURL = "http://localhost:3001";
const reactURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path={`${process.env.REACT_APP_TEST}`} element={<ReactNodeConnect />} /> */}
          <Route path={`${process.env.REACT_APP_HOMEPAGE}`} element={<ResponsiveAppBar />} />
        </Routes>
      </Router>
      {/* <Reactnodeconnect /> */}
    </div>
  );
}

export default App;
export { apiURL, reactURL };