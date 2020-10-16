import React, { ReactNode } from "react";
import PWAPrompt from "./components/PWAPrompt";

export interface PromptData {
  isiOS: boolean;
  visits: number;
}

export interface PromptProps {
  timesToShow: number;
  promptOnVisit: number;
  permanentlyHideOnDismiss: boolean;
  copyTitle: string;
  copyBody: string;
  copyShareButtonLabel: string;
  copyAddHomeButtonLabel: string;
  copyClosePrompt: string;
  delay: number;
  debug: boolean;
}

const deviceCheck = (): boolean => {
  const isiOS = /iphone|ipad|ipod/.test(
    window.navigator.userAgent.toLowerCase()
  );
  const isiPadOS =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
  const isStandalone =
    // @ts-ignore
    "standalone" in window.navigator && window.navigator.standalone;
  return (isiOS || isiPadOS) && !isStandalone;
};

const Prompt = ({
  timesToShow,
  promptOnVisit,
  permanentlyHideOnDismiss,
  copyTitle,
  copyBody,
  copyShareButtonLabel,
  copyAddHomeButtonLabel,
  copyClosePrompt,
  delay,
  debug,
}: PromptProps): ReactNode => {
  const promptData: PromptData = JSON.parse(
    localStorage.getItem("iosPwaPrompt") || ""
  ) || {
    isiOS: deviceCheck(),
    visits: 0,
  };

  if (promptData.isiOS || debug) {
    const aboveMinVisits = promptData.visits + 1 >= promptOnVisit;
    const belowMaxVisits = promptData.visits + 1 < promptOnVisit + timesToShow;

    if (belowMaxVisits || debug) {
      localStorage.setItem(
        "iosPwaPrompt",
        JSON.stringify({
          ...promptData,
          visits: promptData.visits + 1,
        })
      );

      if (aboveMinVisits || debug) {
        return (
          <PWAPrompt
            delay={delay}
            copyTitle={copyTitle}
            copyBody={copyBody}
            copyAddHomeButtonLabel={copyAddHomeButtonLabel}
            copyShareButtonLabel={copyShareButtonLabel}
            copyClosePrompt={copyClosePrompt}
            permanentlyHideOnDismiss={permanentlyHideOnDismiss}
            promptData={promptData}
            maxVisits={timesToShow + promptOnVisit}
          />
        );
      }
    }
  }

  return null;
};

Prompt.defaultProps = {
  timesToShow: 1,
  promptOnVisit: 1,
  permanentlyHideOnDismiss: true,
  copyTitle: "Add to Home Screen",
  copyBody:
    "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareButtonLabel: "1) Press the 'Share' button on the menu bar below.",
  copyAddHomeButtonLabel: "2) Press 'Add to Home Screen'.",
  copyClosePrompt: "Cancel",
  delay: 1000,
  debug: false,
};

export default Prompt;
