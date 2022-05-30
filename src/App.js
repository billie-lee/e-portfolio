import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navigation/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<AboutMe />} />
            <Route path="/about_me" exact element={<AboutMe />} />
            <Route path="/critical_reflection" exact element={<AboutMe />} />
            <Route path="/skills" exact element={<AboutMe />} />
            <Route path="/deliverables" exact element={<AboutMe />} />
            <Route path="/additional_artifacts" exact element={<AboutMe />} />
            {/* <Route path="/create_application" element={<CreateApplication />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/application">
              <Route path=":UUID" element={<ApplicationDetail />} />
              <Route path=":UUID/list" element={<ApplicationWebList />} />
              <Route path=":UUID/:WBID" element={<ApplicationWebList />} />
            </Route> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
