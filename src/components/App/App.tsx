import { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Header from '../Header/Header';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { fetchImagesApi, ImageData } from '../../images-api';
import { Audio } from 'react-loader-spinner';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';

const notify = () => toast('Please enter a search term!');

function App() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{ srcSet: string; alt?: string } | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const onSearch = async (newTopic: string) => {
    setTopic(newTopic);
    setPage(1);
    setImages([]);
    fetchImages(newTopic, 1);
    setHasMore(true);
  };

  const fetchImages = async (topic: string, page: number) => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImagesApi(topic, page);
      if (data.length === 0) {
        alert("Please enter a correct request");
        setHasMore(false);
        return;
      }
      setImages((prevImages) => [...prevImages, ...data]);
      if (data.length < 12) {
        setHasMore(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(topic, nextPage);
  };

  const openModal = (image: { srcSet: string; alt?: string }) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Header onSearch={onSearch} notify={notify} />
      <Toaster toastOptions={{ style: { marginTop: '80px' } }} />
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {loading && <Audio height="80" width="80" color="orange" ariaLabel="loading" />}
      {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
      {images.length > 0 && !loading && hasMore && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedImage={selectedImage} />
    </>
  );
}

export default App;








// import { useState } from 'react';

// import ErrorMessage from '../ErrorMessage/ErrorMessage';
// import Header from '../Header/Header';
// import ImageGallery from '../ImageGallery/ImageGallery';

// import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';

// import { fetchImagesApi } from '../../images-api';
// import { Audio } from 'react-loader-spinner';


// import './App.css';
// import toast,  { Toaster } from 'react-hot-toast';
// import ImageModal from '../ImageModal/ImageModal';


// // _______________________Toast___________________________

// const notify = () => toast('Please enter a search term!');

// function App() {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [topic, setTopic] = useState('');
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hasMore, setHasMore] = useState(true);


//   const onSearch = async (newTopic) => {
//     setTopic(newTopic);
//     setPage(1);
//     setImages([]);
//     fetchImages(newTopic, 1);
//     setHasMore(true);
//   };

//   const fetchImages = async (topic, page) => {
//     try {
//       setError(false);
//       setLoading(true);
//       const data = await fetchImagesApi(topic, page);
         
//       if (data.length === 0) {
//         alert("Please enter a correct request");
//         setHasMore(false);
//         return;
//       }
         
//       setImages((prevImages) => [...prevImages, ...data]);
//       if (data.length < 12) {
//         setHasMore(false);
//       }
     
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMore = () => {
//     const nextPage = page + 1;
//     setPage(nextPage);
//     fetchImages(topic, nextPage);
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       <Header onSearch={onSearch} notify={notify}/>
//       <Toaster   toastOptions={{
//           style: {
//             marginTop: '80px',
//           },
//         }}/>
//       {images.length > 0 && <ImageGallery images={images} openModal={openModal}/>}
//        {loading &&  <Audio
//   height="80"
//   width="80"
//   radius="9"
//   color="orange"
//   ariaLabel="loading"
//   wrapperStyle
//   wrapperClass
// />}
//       {error && <ErrorMessage message="Whoops, something went wrong! Please try reloading this page!" />}
//       {images.length > 0 && !loading && hasMore && <LoadMoreBtn onClick={loadMore} />}
//       <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedImage={selectedImage} />
//    </>
//   );
// }

// export default App;




