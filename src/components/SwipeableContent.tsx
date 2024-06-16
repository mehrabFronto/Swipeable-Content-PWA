"use client";

import { useState, useCallback } from "react";
import { useSwipeable } from "react-swipeable";

const contentArray = [
  "Test Content 1",
  "Test Content 2",
  "Test Content 3",
  "Test Content 4",
];

const SwipeableContent: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleSwipedLeft = useCallback(() => {
    setIndex((prevIndex) => {
      // prevent swiping forward in last index
      if (prevIndex < contentArray.length - 1) {
        return prevIndex + 1;
      }

      return prevIndex;
    });
  }, []);

  const handleSwipedRight = useCallback(() => {
    setIndex((prevIndex) => {
      // prevent swiping backward in first index
      if (prevIndex > 0) {
        return prevIndex - 1;
      }

      return prevIndex;
    });
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    onSwipedRight: handleSwipedRight,
  });

  return (
    <div
      {...handlers}
      className='h-screen w-full flex items-center justify-center bg-gray-100'
    >
      <div className='px-8 py-4 bg-blue-600 rounded-xl shadow-lg'>
        <h1 className='text-2xl font-bold text-white'>{contentArray[index]}</h1>
      </div>
    </div>
  );
};

export default SwipeableContent;
