import { useEffect, useState } from "react";

const useDisplayValues = ({ updateKey }) => {
  const [displayValues, setDisplayValues] = useState({
    colorScheme: "light",
    iOSVersion: 0,
    isStandalone: false,
    isiOS: false,
    isiPadOS: false,
    shouldShowPrompt: false,
  });

  useEffect(() => {
    const isiOS = /iphone|ipad|ipod/.test(
      window.navigator.userAgent.toLowerCase()
    );

    const isiPadOS =
      navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

    const isStandalone =
      "standalone" in window.navigator && window.navigator.standalone;

    const iOSVersion =
      isiOS || isiPadOS
        ? window.navigator.userAgent.match(/OS ([0-9]*)/)[1]
        : 0;

    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const shouldShowPrompt = (isiOS || isiPadOS) && !isStandalone;

    setDisplayValues({
      colorScheme,
      iOSVersion,
      isStandalone,
      isiOS,
      isiPadOS,
      shouldShowPrompt,
    });
  }, [updateKey]);

  return displayValues;
};

export default useDisplayValues;
