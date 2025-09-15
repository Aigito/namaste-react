import { LOGO_URL } from "../utils/constants";
import LoginButton from "./LoginButton";

const Header = () => {

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <LoginButton />
        </ul>
      </div>
    </div>
  );
};

export default Header;