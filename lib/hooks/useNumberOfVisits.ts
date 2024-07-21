import { useEffect, useState } from "react";
import { useLocalStorageObject } from "./useLocalStorageObject";
import { useDeviceAndVersion } from "./useDeviceAndVersion";

export const useNumberOfVisits = () => {
  const { get, set } = useLocalStorageObject();
  const { isValidOS } = useDeviceAndVersion();
  const [numberOfVisits, setNumberOfVisits] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    const numberOfVisits = get("iosPwaPrompt")?.visits ?? 0;
    setNumberOfVisits(numberOfVisits);
  }, []);

  const incrementNumberOfVisits = () => {
    set("iosPwaPrompt", { isValidOS, visits: (numberOfVisits ?? 0) + 1 });
  };

  return { numberOfVisits, incrementNumberOfVisits };
};
