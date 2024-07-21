import { useEffect, useState } from "react";

export const useDeviceAndVersion = () => {
  const [platform, setPlatform] = useState<String | null | undefined>(
    undefined
  );
  const [version, setVersion] = useState<String | null | undefined>(undefined);
  const [isStandalone, setIsStandalone] = useState<boolean | undefined>(
    undefined
  );
  const [isValidOS, setIsValidOS] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platformRegex = new RegExp("(iphone|ipad|ipod|macintosh)", "g");
    const versionRegex = new RegExp("os (\\d+)", "g");

    const platform = platformRegex.exec(userAgent)?.[1];
    const isIpad =
      platform === "macintosh" && window.navigator.maxTouchPoints > 1;
    const version = versionRegex.exec(userAgent)?.[1];
    const standalone =
      "standalone" in window.navigator && !!window.navigator.standalone;

    setIsStandalone(standalone);
    setIsValidOS(isIpad || !!(platform && platform !== "macintosh"));
    setPlatform(isIpad ? "ipad" : platform ?? null);
    setVersion(!!platform || isIpad ? version ?? null : null);
  }, [window.navigator.userAgent]);

  return { platform, version, isStandalone, isValidOS };
};
