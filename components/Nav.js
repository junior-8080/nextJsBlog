import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <h3 className={navStyles.logo}>Js</h3>
      {/* <ul>
                <li>
                    <Link href='/'>Articles</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul> */}
    </nav>
  );
};

export default Nav;
