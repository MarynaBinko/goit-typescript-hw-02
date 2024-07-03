import Modal from 'react-modal';

type ImageModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  selectedImage: { srcSet: string; alt?: string } | null;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, selectedImage }: ImageModalProps) => {
  if (!selectedImage) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={selectedImage.srcSet} alt={selectedImage.alt || 'Image'} />
    </Modal>
  );
};

export default ImageModal;





// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//   },
// };

// Modal.setAppElement('#root');

// const ImageModal = ({ isOpen, onRequestClose, selectedImage }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       style={customStyles}
//       contentLabel="Image Modal"
//       shouldCloseOnOverlayClick={true}
//       shouldCloseOnEsc={true}
//     >
//       {selectedImage && <img src={selectedImage.srcSet} alt={selectedImage.alt} />}
//     </Modal>
//   );
// };

// export default ImageModal;
