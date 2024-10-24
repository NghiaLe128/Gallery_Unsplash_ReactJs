import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading/Heading';
import { UnsplashImage } from './components/UnsplashImage/UnsplashImage';
import { Loader } from './components/Loader/Loader';
import { fetchPhotos } from './services/unsplashApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WrapperImages } from './styles/App.styles';

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [viewType, setViewType] = useState('grid');

  useEffect(() => {
    fetchImages(); 
  }, []);

  const fetchImages = async () => {
    if (loading || !hasMore) return; 
    setLoading(true); 

    // Simulate a loading delay
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    try {
      const newImages = await fetchPhotos(page);
      if (newImages.length > 0) {
        setImages((prev) => [...prev, ...newImages]); 
        setPage((prev) => prev + 1); 
      } else {
        setHasMore(false); 
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <Heading setViewType={setViewType} />
      <InfiniteScroll
        dataLength={images.length} 
        next={fetchImages} 
        hasMore={hasMore} 
        loader={<Loader />}
        endMessage={<p style={{ textAlign: 'center' }}>No more images to load.</p>} 
      >
        <WrapperImages viewType={viewType}>
          {images.map((image) => (
            <UnsplashImage
              key={image.id} 
              url={image.urls.small}
              author={image.user.name}
              viewType={viewType}
            />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;
