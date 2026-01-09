import React, { useState } from 'react';
import './ImageViewer.css';

const ImageViewer = () => {
  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200',
      alt: 'Mountain landscape',
      orientation: 'LANDSCAPE',
      size: 'LARGE'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=200',
      alt: 'Red flowers',
      orientation: 'LANDSCAPE',
      size: 'MEDIUM'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200',
      alt: 'Nature scene',
      orientation: 'PORTRAIT',
      size: 'SMALL'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=200',
      alt: 'Sunset landscape',
      orientation: 'LANDSCAPE',
      size: 'LARGE'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200',
      alt: 'Pink flowers',
      orientation: 'LANDSCAPE',
      size: 'MEDIUM'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200',
      alt: 'Blue flower',
      orientation: 'PORTRAIT',
      size: 'SMALL'
    },
    {
      id: 7,
      url: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800',
      thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=200',
      alt: 'Forest path',
      orientation: 'LANDSCAPE',
      size: 'LARGE'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(6);
  const [filter, setFilter] = useState('ALL');
  const [zoom, setZoom] = useState(100);
  const [sizeFilter, setSizeFilter] = useState('ALL');

  const filteredImages = images.filter(img => {
    const matchesOrientation = filter === 'ALL' || img.orientation === filter;
    const matchesSize = sizeFilter === 'ALL' || img.size === sizeFilter;
    return matchesOrientation && matchesSize;
  });

 
  const displayImages = filteredImages.length > 0 ? filteredImages : images;
  const safeCurrentIndex = currentIndex >= displayImages.length ? 0 : currentIndex;

  const handlePrevious = () => {
    const newIndex = safeCurrentIndex > 0 ? safeCurrentIndex - 1 : displayImages.length - 1;
    setCurrentIndex(newIndex);
    console.log('Previous clicked. New index:', newIndex);
  };

  const handleNext = () => {
    const newIndex = safeCurrentIndex < displayImages.length - 1 ? safeCurrentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    console.log('Next clicked. New index:', newIndex);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    console.log('Thumbnail clicked. Index:', index);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 25, 25));
  };

  const handleZoomReset = () => {
    setZoom(100);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setCurrentIndex(0); // Reset to first image when filter changes
    console.log('Filter changed to:', newFilter);
  };

  const handleSizeFilterChange = (newSize) => {
    setSizeFilter(newSize);
    setCurrentIndex(0); 
    console.log('Size filter changed to:', newSize);
  };

  return (
    <div className="image-viewer-container">
      <div className="main-viewer">
        <div className="viewer-content">
          <button className="nav-button prev" onClick={handlePrevious} aria-label="Previous image">
            ❮
          </button>
          
          <div className="main-image-container">
            <img 
              src={displayImages[safeCurrentIndex].url} 
              alt={displayImages[safeCurrentIndex].alt}
              className="main-image"
              style={{ 
                transform: `scale(${zoom / 100})`,
                transition: 'transform 0.3s ease'
              }}
            />
          </div>

          <button className="nav-button next" onClick={handleNext} aria-label="Next image">
            ❯
          </button>
        </div>

        <div className="viewer-controls">
          <div className="control-buttons">
            <button className="control-btn" aria-label="First">⏮</button>
            <button className="control-btn" aria-label="Rewind">⏪</button>
            <button className="control-btn play" aria-label="Play">▶</button>
            <button className="control-btn" aria-label="Fast forward">⏩</button>
            <button className="control-btn" aria-label="Last">⏭</button>
          </div>
          
          <div className="progress-dots">
            {displayImages.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === safeCurrentIndex ? 'active' : ''}`}
                aria-label={`Image ${index + 1}`}
              />
            ))}
          </div>

          <div className="zoom-controls">
            <button className="zoom-btn" onClick={handleZoomOut} aria-label="Zoom out">
              🔍−
            </button>
            <button className="zoom-btn" onClick={handleZoomReset} aria-label="Reset zoom">
              {zoom}%
            </button>
            <button className="zoom-btn" onClick={handleZoomIn} aria-label="Zoom in">
              🔍+
            </button>
          </div>
        </div>
      </div>

      <div className="thumbnail-section">
        <div className="thumbnail-header">
          <div className="file-info">
            Files selected: [0/0/0] {displayImages.length} / {images.length} Files
          </div>
          
          <div className="filter-controls">
            <select 
              className="filter-dropdown"
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              aria-label="Filter images"
            >
              <option value="ALL">Do not filter</option>
              <option value="LANDSCAPE">Landscape</option>
              <option value="PORTRAIT">Portrait</option>
            </select>
            
            <select 
              className="size-dropdown"
              value={sizeFilter}
              onChange={(e) => handleSizeFilterChange(e.target.value)}
              aria-label="Filter by size"
            >
              <option value="ALL">ALL</option>
              <option value="LARGE">Large</option>
              <option value="MEDIUM">Medium</option>
              <option value="SMALL">Small</option>
            </select>
          </div>
        </div>

        <div className="thumbnail-grid">
          {displayImages.map((image, index) => (
            <div 
              key={image.id}
              className={`thumbnail-item ${index === safeCurrentIndex ? 'selected' : ''}`}
              onClick={() => handleThumbnailClick(index)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleThumbnailClick(index);
                }
              }}
              aria-label={`Select ${image.alt}`}
            >
              <img 
                src={image.thumbnail} 
                alt={image.alt}
                className="thumbnail-image"
              />
              {index === safeCurrentIndex && (
                <div className="star-indicator" aria-hidden="true">⭐</div>
              )}
              <div className="thumbnail-dots" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="thumb-dot" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;
