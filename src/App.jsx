import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import GroupLessons from "./pages/GroupLessons";
import Resources from "./pages/Resources";
import Kids from "./pages/Kids";
import Business from "./pages/Business";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/group-lessons" element={<GroupLessons />} />
        <Route path="/resources" exact element={<Resources />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
