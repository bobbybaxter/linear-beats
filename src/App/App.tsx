import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'src/components/Home/Home';
import { MyNavbar } from 'src/components/MyNavbar/MyNavbar';
import { Test1 } from 'src/components/Test1/Test1';
import Test2 from '../components/Test2/Test2';
import Test3 from '../components/Test3/Test3';
import Test4 from '../components/Test4/Test4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <MyNavbar />
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/test1" element={<Test1 />} />
              <Route path="/test2" element={<Test2 />} />
              <Route path="/test3" element={<Test3 />} />
              <Route path="/test4" element={<Test4 />} />

              {/* <Redirect from="*" to="/home" /> */}
            </Routes>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
