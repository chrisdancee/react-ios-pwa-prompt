import React from "react";

import shouldShowPrompt from "./shouldShowPrompt";
import PWAPrompt from "./components/PWAPrompt";

export default ({
  timesToShow = 1,
  promptOnVisit = 1,
  permanentlyHideOnDismiss = true,
  copyTitle = "Add to Home Screen",
  copyBody = "This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.",
  copyShareButtonLabel = "1) Press the 'Share' button on the menu bar below.",
  copyAddHomeButtonLabel = "2) Press 'Add to Home Screen'.",
  copyClosePrompt = "Cancel",
  delay = 1000,
  debug = false,
  onClose = () => {},
}) => {
  if (shouldShowPrompt({ timesToShow, promptOnVisit, debug })) {
    const promptData = JSON.parse(localStorage.getItem("iosPwaPrompt"));

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
        onClose={onClose}
      />
    )
  }

  return null;
};
