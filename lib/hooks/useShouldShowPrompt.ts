import { useEffect, useState } from "react";
import { useNumberOfVisits } from "./useNumberOfVisits";
import { useDeviceAndVersion } from "./useDeviceAndVersion";

type Props = {
  promptOnVisit: number;
  timesToShow: number;
  isShown?: boolean;
};

export const useShouldShowPrompt = ({
  promptOnVisit,
  timesToShow,
  isShown,
}: Props) => {
  const [shouldShowPrompt, setShouldShowPrompt] = useState<boolean | undefined>(
    undefined
  );
  const { isValidOS, isStandalone } = useDeviceAndVersion();
  const { numberOfVisits } = useNumberOfVisits();

  useEffect(() => {
    if (isValidOS !== undefined && numberOfVisits !== undefined && isStandalone === false) {
      const aboveMinVisits = numberOfVisits + 1 >= promptOnVisit;
      const belowMaxVisits = numberOfVisits + 1 < promptOnVisit + timesToShow;

      const shouldTrigger = isValidOS && aboveMinVisits && belowMaxVisits;

      setShouldShowPrompt(
        (isShown === undefined && shouldTrigger) ||
          (isShown !== undefined && isShown)
      );
    }
  }, [isValidOS, numberOfVisits, isShown, isStandalone]);

  return { shouldShowPrompt };
};
