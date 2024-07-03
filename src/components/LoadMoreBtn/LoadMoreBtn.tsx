import styles from "./LoadMoreBtn.module.css";

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <div>
      <button type="submit" onClick={onClick} className={styles.button}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;




// import styles from "./LoadMoreBtn.module.css"

// const LoadMoreBtn = ({onClick}) => {
//   return (
//     <div>
//       <button type="submit" onClick={onClick} className={styles.button}>Load more</button>
//     </div>
//   )

// }

// export default LoadMoreBtn
