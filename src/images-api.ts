import axios from "axios";

const ACCESS_KEY = "s7-2OHlQ6b9zc1hiGytIsHigWHNrwQUF29UnGjOi69E";

axios.defaults.baseURL = "https://api.unsplash.com/";

export type ImageData = {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
};

export const fetchImagesApi = async (topic: string, page = 1): Promise<ImageData[]> => {
  const response = await axios.get("search/photos", {
    params: {
      query: topic,
      page: page,
      per_page: 12,
      client_id: ACCESS_KEY
    }
  });
  console.log("API response:", response.data);
  return response.data.results;
};



// import axios from "axios";
// const ACCESS_KEY="s7-2OHlQ6b9zc1hiGytIsHigWHNrwQUF29UnGjOi69E";

// axios.defaults.baseURL = "https://api.unsplash.com/";


   
//   export const fetchImagesApi = async (topic, page = 1) => {
//     const response = await axios.get("search/photos", {
//       params: {
//         query: topic,
//         page: page,
//         per_page: 12,
//         client_id: ACCESS_KEY 
//       }
//     });
//     console.log("API response:", response.data);
    
//     return response.data.results; 
//   };