import React from 'react';

const NoHighlight = ({ children }) => {
  return (
    <div
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        cursor: 'not-allowed',
      }}
    >
      {children}
    </div>
  );
};

export default NoHighlight;
