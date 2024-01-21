import Logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <img src={Logo} alt="Cambly logo" />
          <div>
            <Link>Преподаватели</Link>
            <Link>Курсы</Link>
            <Link>Групповые уроки</Link>
            <Link>Ресурсы</Link>
            <Link>Дети</Link>
            <Link>Бизнес</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
