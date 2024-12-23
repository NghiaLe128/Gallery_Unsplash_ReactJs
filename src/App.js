import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  const fetchImages = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const newImages = await fetchPhotos(page);
      if (newImages.length > 0) {
        setImages((prev) => [...prev, ...newImages]); // Append new images to state
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false); // No more images to load
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false); // Reset loading state
    } 
  }, [loading, hasMore, page]); // Dependencies for useCallback

  useEffect(() => {
    fetchImages(); 
  }, [fetchImages]); // Dependency to call fetchImages again if it changes

  return (
    <Router>
      <div>
        <Routes>
          {/* Grid View Route */}
          <Route path="/" element={
            <>
              <Heading setViewType={() => {}} />
              <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<p style={{ textAlign: 'center' }}>No more images to load.</p>}
              >
                <WrapperImages viewType="grid">
                  {images.map((image, index) => (
                    <UnsplashImage
                      key={`${image.id}-${page}-${index}`}
                      url={image.urls.small}
                      author={image.user.name}
                      viewType="grid"
                      thumbnail={image.urls.small}
                      image={image}
                    />
                  ))}
                </WrapperImages>
              </InfiniteScroll>
            </>
          } />
          
          {/* Detailed View Route */}
          <Route path="/photos/:id" element={<PhotoDetail />} />
          
          {/* List View Route */}
          <Route path="/photos" element={
            <>
              <Heading setViewType={() => {}} />
              <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<p style={{ textAlign: 'center' }}>No more images to load.</p>}
              >
                <WrapperImages viewType="list">
                  {images.map((image, index) => (
                    <UnsplashImage
                      key={`${image.id}-${page}-${index}`}
                      url={image.urls.small}
                      author={image.user.name}
                      viewType="list"
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
