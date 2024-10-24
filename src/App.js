import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Heading } from './components/Heading/Heading';
import { UnsplashImage } from './components/UnsplashImage/UnsplashImage';
import { Loader } from './components/Loader/Loader';
import { fetchPhotos } from './services/unsplashApi';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WrapperImages } from './styles/App.styles';
import PhotoDetail from './components/PhotoDetail/PhotoDetail';

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
    <Router>
      <div>
        <Routes>
          <Route path="/photo-detail" element={<PhotoDetail />} />
          <Route path="/" element={
            <>
              {/* Render the heading only on the main page */}
              <Heading setViewType={setViewType} />
              <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<p style={{ textAlign: 'center' }}>No more images to load.</p>}
              >
                <WrapperImages viewType={viewType}>
                  {images.map((image, index) => (
                    <UnsplashImage
                      key={`${image.id}-${page}-${index}`} // Create a unique key
                      url={image.urls.small}
                      author={image.user.name}
                      viewType={viewType}
                      thumbnail={image.urls.small}
                      image={image} 
                    />
                  ))}
                </WrapperImages>
              </InfiniteScroll>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
