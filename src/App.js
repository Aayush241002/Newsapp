import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import Newswrapper from './components/Newswrapper';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import TermsConditions from './components/TermsConditions';
import Footer from './components/Footer';

const App = () => {
  const [progress, setProgress] = useState(0);
  const pagesize = 6;
  const apikey = process.env.REACT_APP_TOP_HEADLINES_KEY;

  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
        />
        <main>
          <Routes>
            <Route path="/" element={<News setprogress={setProgress} key="general" apikey={apikey} pagesize={pagesize} category="general" />} />
            <Route path="/business" element={<News setprogress={setProgress} key="business" apikey={apikey} pagesize={pagesize} category="business" />} />
            <Route path="/entertainment" element={<News setprogress={setProgress} key="entertainment" apikey={apikey} pagesize={pagesize} category="entertainment" />} />
            <Route path="/health" element={<News setprogress={setProgress} key="health" apikey={apikey} pagesize={pagesize} category="health" />} />
            <Route path="/science" element={<News setprogress={setProgress} key="science" apikey={apikey} pagesize={pagesize} category="science" />} />
            <Route path="/sports" element={<News setprogress={setProgress} key="sports" apikey={apikey} pagesize={pagesize} category="sports" />} />
            <Route path="/technology" element={<News setprogress={setProgress} key="technology" apikey={apikey} pagesize={pagesize} category="technology" />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsConditions" element={<TermsConditions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/business/country/:code" element={<Newswrapper setprogress={setProgress} key="business" apikey={apikey} pagesize={pagesize} category="business" />} />
            <Route path="/entertainment/country/:code" element={<Newswrapper setprogress={setProgress} key="entertainment" apikey={apikey} pagesize={pagesize} category="entertainment" />} />
            <Route path="/country/:code" element={<Newswrapper setprogress={setProgress} key="general" apikey={apikey} pagesize={pagesize} category="general" />} />
            <Route path="/health/country/:code" element={<Newswrapper setprogress={setProgress} key="health" apikey={apikey} pagesize={pagesize} category="health" />} />
            <Route path="/science/country/:code" element={<Newswrapper setprogress={setProgress} key="science" apikey={apikey} pagesize={pagesize} category="science" />} />
            <Route path="/sports/country/:code" element={<Newswrapper setprogress={setProgress} key="sports" apikey={apikey} pagesize={pagesize} category="sports" />} />
            <Route path="/technology/country/:code" element={<Newswrapper setprogress={setProgress} key="technology" apikey={apikey} pagesize={pagesize} category="technology" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
