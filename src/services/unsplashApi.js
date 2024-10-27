import axios from 'axios';

const apiRoot = "https://api.unsplash.com";
const accessKey = process.env.REACT_APP_ACCESSKEY;

export const fetchPhotos = async (page = 1) => {
  try {
    const response = await axios.get(`${apiRoot}/photos`, {
      params: {
        client_id: accessKey,
        page: page,
        per_page: 10,
      },
    });
    return response.data.map(photo => ({
      id: photo.id,
      urls: photo.urls,
      user: photo.user,
    }));
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("Rate Limit Exceeded. Please try again later.");
      return [];
    }
    console.error("Error fetching photos:", error);
    throw error;
  }
};

export const fetchPhotoById = async (id) => {
  try {
    const response = await axios.get(`${apiRoot}/photos/${id}`, {
      params: { client_id: accessKey },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching photo by ID:", error);
    throw error;
  }
};
