import Link from "next/link";
import styles from "../styles/components/Header.module.scss";

const Header = () => {
  return <div className={`${styles.main_header}`}>


    <ul><li><Link>Home</Link></li></ul>
  </div>;
};

export default Header;
