import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../App.css';
import { ReactNodeConnect } from "./ReactNodeConnect";
import { BlogsAll } from "./BlogsAll";
import { WriteBlog } from "./WriteBlog";
import { AllBlogs } from "./AllBlogs";
import { ContactPage } from "./ContactPage";
// import { HomePage } from "./HomePage"; 
import { ResponsiveAppBar } from "./ResponsiveAppBar";

const apiURL = "https://vishnu-blog-be.onrender.com";
const reactURL = "https://vishnu-blog-fe.onrender.com";
// const apiURL = "http://localhost:3001";
// const reactURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path={`${process.env.REACT_APP_TEST}`} element={<ReactNodeConnect />} />
          <Route path={`${process.env.REACT_APP_HOMEPAGE}`} element={<ResponsiveAppBar />} />
          <Route path={`${process.env.REACT_APP_ALLBLOGS}`} element={<AllBlogs />} />
          <Route path={`${process.env.REACT_APP_BLOG}`} element={<BlogsAll />} />
          <Route path={`${process.env.REACT_APP_WRITEBLOG}`} element={<WriteBlog />} />
          <Route path={`${process.env.REACT_APP_CONTACTPAGE}`} element={<ContactPage />} />
        </Routes>
      </Router>
      {/* <Reactnodeconnect /> */}
    </div>
  );
}

export default App;
export { apiURL, reactURL };
