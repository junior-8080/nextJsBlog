import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Let's Talk About </span>
        <br />
        Software
        <br />
        Development{" "}🧑🏽‍💻
      </h1>
      <p className={headerStyles.description}>
        Discussing TECH Related Topics And TECH Updates..
      </p>
    </div>
  );
};

export default Header;
