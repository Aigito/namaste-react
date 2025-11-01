import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img
          className="w-64"
          src={LOGO_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 justify-between">
          <li className="px-4">
            <p>Online Status: {onlineStatus ? "🟢" : "🔴"}</p>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <LoginButton />
        </ul>
      </div>
    </div>
  );
};

export default Header;