import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/LoadingAnimation.json'; 

const LoadingPage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
};

export default LoadingPage;
