import React from 'react';
import Lottie from 'react-lottie';
import lotties from '../assets/lotties';

export default function LottieForLoading() {
  // Lottie options
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: lotties.loading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie
      options={lottieOptions}
      height={50}
      width={190}
      isStopped={false}
      isPaused={false}
    />
  );
}
