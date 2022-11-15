import { bubble as Menu } from "react-burger-menu";
import "./theNav.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { TbHome } from "react-icons/tb";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";
import { BsMusicPlayer } from "react-icons/bs";
import cart from "../images/cart.png";
import { useSelector } from "react-redux";
function TheNav() {
  const state = useSelector((state) => state);

  const sum = state.reduce((n, { price }) => n + price, 0);
  return (
    <div className="navigate">
      <div className="imgWrap">
        <div></div>
        <img src={logo} alt="logo" height="60" />

        <div className="icon">
          {sum}$<img src={cart} alt="logo" height="32" />
        </div>
      </div>
      <Menu>
        <Link id="home" className="menu-item" to="/">
          <TbHome />
          Home
        </Link>
        <Link id="cart" className="menu-item" to="/cart">
          <BsCart4 />
          Cart
        </Link>
        <Link id="login" className="menu-item" to="/login">
          <MdOutlineLogin />
          Login
        </Link>
        <Link id="music" className="menu-item" to="/music">
          <BsMusicPlayer />
          Music
        </Link>

        <a className="menu-item" href="https://emallrestaurant.netlify.app/">
          <MdOutlineRestaurant />
          Food
        </a>
      </Menu>
    </div>
  );
}

export default TheNav;
