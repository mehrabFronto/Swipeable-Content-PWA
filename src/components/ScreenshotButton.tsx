import React, { useCallback, useRef, useState } from "react";
import html2canvas from "html2canvas";
import ScreenshotModal from "./ScreenshotModal";

const ScreenshotButton: React.FC<{
  parentRef: React.RefObject<HTMLDivElement>;
}> = ({ parentRef }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);

  const takeScreenshot = useCallback(async () => {
    try {
      if (parentRef.current) {
        const canvas = await html2canvas(parentRef.current);
        const imgData: string = canvas.toDataURL("image/png");
        setScreenshotUrl(imgData); // save the taken screen shot
        setModalOpen(true); // Open the modal after taking the screenshot
      }
    } catch (error) {
      console.error("Error capturing screenshot:", error);
    }
  }, []);

  return (
    <>
      <button
        className='bg-blue-600 text-white font-bold p-4 rounded-full fixed top-6 right-4'
        onClick={takeScreenshot}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='size-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
          />
        </svg>
      </button>
      <ScreenshotModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        screenshotUrl={screenshotUrl}
      />
    </>
  );
};

export default ScreenshotButton;
