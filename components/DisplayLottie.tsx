import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Lottie with ssr: false
const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

type Props = {
  animationPath: string;
};

const GreetingLottie = ({ animationPath }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      {/* Render Lottie only on the client-side */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
