import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import AppBar from "./Appbar";
import Signin from "./Signin";
import React, { useRef } from "react";
import AddCourse from "./addCourse";
import LandingPage from "./LandingPage";
import ShowCourses from "./ShowCourses";
import Course from "./Course.jsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Router>
          <AppBar />
          <Routes>
            <Route path="/course/:courseId" element={<Course />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<ShowCourses />} />
            <Route path="/addcourse" element={<AddCourse />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
