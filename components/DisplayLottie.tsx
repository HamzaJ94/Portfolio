import dynamic from 'next/dynamic';

// Dynamically import Lottie with SSR disabled
const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

type Props = {
  animationData: object; // Expecting animation JSON data
};

const GreetingLottie = ({ animationData }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // Pass animation data
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default GreetingLottie;
