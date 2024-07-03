
import styles from "./ImageCard.module.css";

type ImageCardProps = {
  src: string;
  srcSet: string;
  alt: string;
  openModal: (image: { srcSet: string }) => void;
};

const ImageCard = ({ src, srcSet, alt, openModal }: ImageCardProps) => {
  return (
    <div>
      <img src={src} alt={alt} onClick={() => openModal({ srcSet })} className={styles.img} />
    </div>
  );
};

export default ImageCard;



// import styles from "./ImageCard.module.css"

// const ImageCard = ({ src, srcSet, alt, openModal  }) => {
//   return (
//     <div>
//         <img src={src} alt={alt} onClick={() => openModal({srcSet})} className={styles.img}/>
//             </div>
//   )
// }

// export default ImageCard
