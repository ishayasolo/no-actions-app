import React from 'react';

const Image = ({ src, alt }) => {
  const handleContextMenu = e => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = e => {
    e.preventDefault();
    return false;
  };

  return (
    <img
      src={src}
      alt={alt}
      onContextMenu={handleContextMenu}
      onDragStart={handleDragStart}
      style={{
        pointerEvents: 'none',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '6px',
      }}
    />
  );
};

export default Image;
