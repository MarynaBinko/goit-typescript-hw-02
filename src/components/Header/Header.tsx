import styles from "./Header.module.css";
import SearchBar from "../SearchBar/SearchBar";

type HeaderProps = {
  onSearch: (topic: string) => void;
  notify: () => void;
};

const Header = ({ onSearch, notify }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <SearchBar onSearch={onSearch} notify={notify} />
    </header>
  );
};

export default Header;


// import styles from "./Header.module.css"
// import SearchBar from "../SearchBar/SearchBar";


// const Header = ({onSearch, notify}) => {
//   return (
//     <header className={styles.header}>
//       <SearchBar onSearch={onSearch} notify={notify} />
            
//     </header>
//   )
// }

// export default Header;





