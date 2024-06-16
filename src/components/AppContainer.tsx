"use client";

import React, { useRef } from "react";
import ScreenshotButton from "./ScreenshotButton";
import SwipeableContent from "./SwipeableContent";

const AppContainer: React.FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={parentRef} className='w-full h-screen'>
        <SwipeableContent />
      </div>
      <ScreenshotButton parentRef={parentRef} />
    </>
  );
};

export default AppContainer;
