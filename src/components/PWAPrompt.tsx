import React, { Fragment, useEffect, useState } from "react";

import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";
import { PromptData } from "../index";

// @ts-ignore
import * as styles from "./PWAPrompt.styles.scss";

interface PWAPromptProps {
  delay: number;
  copyTitle: string;
  copyBody: string;
  copyAddHomeButtonLabel: string;
  copyShareButtonLabel: string;
  copyClosePrompt: string;
  permanentlyHideOnDismiss: boolean;
  promptData: PromptData;
  maxVisits: number;
  onClose?: () => void;
}

const PWAPrompt = ({
  delay,
  copyTitle,
  copyBody,
  copyAddHomeButtonLabel,
  copyShareButtonLabel,
  copyClosePrompt,
  permanentlyHideOnDismiss,
  promptData,
  maxVisits,
  onClose = () => {},
}: PWAPromptProps) => {
  const [isVisible, setVisibility] = useState(!delay);

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        // Prevent keyboard appearing over the prompt if a text input has autofocus set
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }

        setVisibility(true);
      }, delay);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(styles.noScroll);
    }
  }, [isVisible]);

  const isiOS13 = /OS 13/.test(window.navigator.userAgent);
  const visibilityClass = isVisible ? styles.visible : styles.hidden;
  const iOSClass = isiOS13 ? styles.modern : "legacy";

  const dismissPrompt = () => {
    document.body.classList.remove(styles.noScroll);
    setVisibility(false);

    if (permanentlyHideOnDismiss) {
      localStorage.setItem(
        "iosPwaPrompt",
        JSON.stringify({
          ...promptData,
          visits: maxVisits,
        })
      );
    }
    onClose();
  };

  const onTransitionOut = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (!isVisible) {
      event.currentTarget.style.display = "none";
      onClose();
    }
  };

  return (
    <Fragment>
      <div
        className={`${styles.pwaPromptOverlay} ${visibilityClass} ${iOSClass} iOSPWA-overlay`}
        aria-label="Close"
        role="button"
        onClick={dismissPrompt}
        onTransitionEnd={onTransitionOut}
      />
      <div
        className={`${styles.pwaPrompt} ${visibilityClass} ${iOSClass} iOSPWA-container`}
        aria-describedby="pwa-prompt-description"
        aria-labelledby="pwa-prompt-title"
        role="dialog"
        onTransitionEnd={onTransitionOut}
      >
        <div className={`${styles.pwaPromptHeader} iOSPWA-header`}>
          <p
            id="pwa-prompt-title"
            className={`${styles.pwaPromptTitle} iOSPWA-title`}
          >
            {copyTitle}
          </p>
          <button
            className={`${styles.pwaPromptCancel} iOSPWA-cancel`}
            onClick={dismissPrompt}
          >
            {copyClosePrompt}
          </button>
        </div>
        <div className={`${styles.pwaPromptBody} iOSPWA-body`}>
          <div className={`${styles.pwaPromptDescription} iOSPWA-description`}>
            <p
              id="pwa-prompt-description"
              className={`${styles.pwaPromptCopy} iOSPWA-description-copy`}
            >
              {copyBody}
            </p>
          </div>
        </div>
        <div className={`${styles.pwaPromptInstruction} iOSPWA-steps`}>
          <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step1`}>
            <ShareIcon
              className={`${styles.pwaPromptShareIcon} iOSPWA-step1-icon`}
              modern={isiOS13}
            />
            <p
              className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step1-copy`}
            >
              {copyShareButtonLabel}
            </p>
          </div>
          <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step2`}>
            <HomeScreenIcon
              className={`${styles.pwaPromptHomeIcon} iOSPWA-step2-icon`}
              modern={isiOS13}
            />
            <p
              className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step2-copy`}
            >
              {copyAddHomeButtonLabel}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PWAPrompt;
