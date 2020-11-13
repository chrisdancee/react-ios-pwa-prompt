import { useEffect, useState } from "react";

const useScreenDimensions = () => {
  const [screenDimensions, setScreenDimensions] = useState([0, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      setScreenDimensions([window.innerWidth, window.innerHeight]);
    };
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
