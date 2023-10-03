import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App = ()=> {
  const pagesize= 6;
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
             height={3}
             color='#f11946'
             progress={progress}
         />
          <Routes>
            <Route exact  path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pagesize} country="in" category="general" color="danger"  /> } /> 
            <Route exact  path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  key="business" pageSize={pagesize} country="in" category="business" color="secondary" /> } /> 
            <Route exact  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="entertainment" pageSize={pagesize} country="in" category="entertainment" color="success" /> }/> 
            <Route exact  path="/general" element={<News setProgress={setProgress} apiKey={apiKey}  key="general" pageSize={pagesize} country="in" category="general" color="danger" /> } /> 
            <Route exact  path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  key="health" pageSize={pagesize} country="in" category="health" color="warning" /> } /> 
            <Route exact  path="/science"  element={<News setProgress={setProgress} apiKey={apiKey}  key="science" pageSize={pagesize} country="in" category="science" color="info" /> }/> 
            <Route exact  path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="sports" pageSize={pagesize} country="in" category="sports" color="dark" /> } /> 
            <Route exact  path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="technology" pageSize={pagesize} country="in" category="technology" color="success" /> } /> 
          </Routes>
        </Router> 
      </div>
    );
  
}
 
export default App;