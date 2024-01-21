import Logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-2  px-[40px]">
        <div className="flex gap-[30px]">
          <img src={Logo} alt="Cambly logo" />
          <div className="flex gap-[19px] text-white">
            <Link to="/teachers">Tutors</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/group-lessons">Group Lessons</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/kids">Kids</Link>
            <Link to="/business">Business</Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <select
            name="languages"
            id="languages"
            className="rounded-2xl py-[12.4px] px-[12.8px] font-medium"
          >
            <option value="russian">русский</option>
            <option value="english">English</option>
            <option value="espanol">español</option>
            <option value="uzbek">Uzbekistan</option>
          </select>
          <button className="rounded-2xl bg-white py-[13.2px] px-5 text-[#236482] font-medium">
            Log in
          </button>
          <button className="rounded-2xl bg-[#FFC929] py-[13.2px] px-5 text-[#191919] font-medium">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
