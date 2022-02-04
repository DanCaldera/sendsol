import React from 'react';

const Background = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    // <div className="dark:bg-gray-800 bg-gray-50 overflow-hidden transition-all">
    <div className="bg-gray-50 overflow-hidden transition-all h-full">
      {children}
    </div>
  );
};

export default Background;
