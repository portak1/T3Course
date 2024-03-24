import Lottie from "lottie-react";

import loadingAnimation from "../../../../../public/animace/LoadingAnimation.json";

interface ILoadingOverlayProps {
  isPending: boolean;
}

const LoadingOverlay: React.FC<ILoadingOverlayProps> = ({ isPending }) => {
  if (!isPending) return null;

  return (
    <>
      <div className="flex"> </div>
      <div className="absolute left-0 top-0 z-[1000]">
        <div className="fixed flex h-screen w-full flex-col items-center justify-center backdrop-blur-md transition-all">
          <Lottie
            animationData={loadingAnimation}
            loop
            className="min-h-[100vh] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingOverlay;
