"use client";

import { useEffect } from "react";
import { useDeviceAndVersion } from "./hooks/useDeviceAndVersion";
import { useNumberOfVisits } from "./hooks/useNumberOfVisits";
import { useShouldShowPrompt } from "./hooks/useShouldShowPrompt";
import { Container } from "./components/Container";

type Props = {
  appIconPath?: string;
  copyAddToHomeScreenStep?: string;
  copyDescription?: string;
  copyShareStep?: string;
  copySubtitle?: string;
  copyTitle?: string;
  delay?: number;
  promptOnVisit?: number;
  timesToShow?: number;
  onClose?: () => void;
  isShown?: boolean;
};

const PWAPrompt = ({
  appIconPath = `https://s2.googleusercontent.com/s2/favicons?domain=${window?.location?.origin}`,
  copyAddToHomeScreenStep = "Press 'Add to Home Screen'",
  copyDescription = "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareStep = "Press the 'Share' button on the menu bar below",
  copySubtitle = String(window?.location?.href),
  copyTitle = "Add to Home Screen",
  delay = 1000,
  isShown = undefined,
  onClose = () => {},
  promptOnVisit = 2,
  timesToShow = 2,
}: Props) => {
  const { isValidOS } = useDeviceAndVersion();
  const { numberOfVisits, incrementNumberOfVisits } = useNumberOfVisits();
  const { shouldShowPrompt } = useShouldShowPrompt({
    promptOnVisit,
    timesToShow,
    isShown,
  });

  useEffect(() => {
    if (isValidOS && numberOfVisits !== undefined) {
      incrementNumberOfVisits();
    }
  }, [isValidOS]);

  if (shouldShowPrompt) {
    return (
      <Container
        delay={delay}
        copyTitle={copyTitle}
        copySubtitle={copySubtitle}
        copyDescription={copyDescription}
        copyShareStep={copyShareStep}
        copyAddToHomeScreenStep={copyAddToHomeScreenStep}
        onClose={onClose}
        appIconPath={appIconPath}
      />
    );
  }

  return null;
};

export default PWAPrompt;
