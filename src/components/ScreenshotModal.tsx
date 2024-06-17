import Image from "next/image";
import React, { useCallback } from "react";

interface ScreenshotModalProps {
  isOpen: boolean;
  onClose: () => void;
  screenshotUrl: string | null;
}

const ScreenshotModal: React.FC<ScreenshotModalProps> = ({
  isOpen,
  onClose,
  screenshotUrl,
}) => {
  const handleShare = useCallback(() => {
    if (screenshotUrl) {
      // Implement the logic to share the screenshot
    }
  }, [screenshotUrl]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4'>
          <div className='bg-white p-4 rounded-lg max-w-md w-full relative'>
            {screenshotUrl ? (
              <>
                <div className='flex items-center justify-center'>
                  <Image
                    src={screenshotUrl}
                    alt='Screenshot'
                    className='max-w-full mb-4 rounded-xl border-2 border-blue-600 mt-6'
                    width={200}
                    height={500}
                  />
                </div>
                <div className='flex justify-center space-x-4'>
                  <button
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                    onClick={handleShare}
                  >
                    Share on Telegram
                  </button>
                  <button
                    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
                    onClick={handleShare}
                  >
                    Share on Whatsapp
                  </button>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
            <button
              className='absolute top-0 right-0 m-4 p-1'
              onClick={onClose}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 text-gray-600'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={3}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenshotModal;
