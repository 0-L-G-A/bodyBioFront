import React from 'react';
import image404desktop from '../../../assets/404desktop.webp';
import image404phone from '../../../assets/404phone.webp';
import image404tablet from '../../../assets/404tablet.webp';

const NotFound = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={image404desktop}
        alt="404 Not Found"
        className="hidden md:hidden lg:block absolute inset-0 w-full h-full object-cover z-10"
      />
      <img
        src={image404tablet}
        alt="404 Not Found"
        className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover z-10"
      />
      <img
        src={image404phone}
        alt="404 Not Found"
        className="block md:hidden absolute inset-0 w-full h-full object-cover z-10"
      />
      <a
        href="/"
        className="block absolute z-20 text-white text-3xl font-bold bg-darkSeaWave p-3 rounded-lg hover:bg-opacity-90 transition-all shadow-customSmRD"
        style={{
          top: '3%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;
