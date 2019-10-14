import React, { Fragment, useEffect, useState } from "react";

import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";

import styles from "./PWAPrompt.styles.scss";

const PWAPrompt = ({
  delay,
  copyTitle,
  copyBody,
  copyAddHomeButtonLabel,
  copyShareButtonLabel,
  copyClosePrompt,
  permanentlyHideOnDismiss,
  promptData,
  maxVisits
}) => {
  useEffect(() => {
    if (delay) {
      setTimeout(() => setVisibility(true), delay);
    }
  }, []);

  const [isVisible, setVisibility] = useState(!Boolean(delay));

  const isiOS13 = /OS 13/.test(window.navigator.userAgent);

  const visibilityClass = isVisible ? styles.visible : styles.hidden;
  const iOSClass = isiOS13 ? styles.modern : "legacy";

  const dismissPrompt = () => {
    setVisibility(false);
    if (permanentlyHideOnDismiss) {
      localStorage.setItem(
        "iosPwaPrompt",
        JSON.stringify({
          ...promptData,
          visits: maxVisits
        })
      );
    }
  };

  return (
    <Fragment>
      <div
        className={`${styles.pwaPromptOverlay} ${visibilityClass} ${iOSClass}`}
        aria-label="Close"
        role="button"
        onClick={dismissPrompt}
      />
      <div
        className={`${styles.pwaPrompt} ${visibilityClass} ${iOSClass}`}
        aria-describedby="pwa-prompt-description"
        aria-labelledby="pwa-prompt-title"
        role="dialog"
      >
        <div className={styles.pwaPromptHeader}>
          <p id="pwa-prompt-title" className={styles.pwaPromptTitle}>
            {copyTitle || `Add to Home Screen`}
          </p>
          <button className={styles.pwaPromptCancel} onClick={dismissPrompt}>
            {copyClosePrompt || "Cancel"}
          </button>
        </div>
        <div className={styles.pwaPromptBody}>
          <div className={styles.pwaPromptDescription}>
            <p id="pwa-prompt-description" className={styles.pwaPromptCopy}>
              {copyBody ||
                `This website has app functionality. Add it to your home screen to use it in fullscreen and while offline.`}
            </p>
          </div>
        </div>
        <div className={styles.pwaPromptInstruction}>
          <div className={styles.pwaPromptInstructionStep}>
            <ShareIcon className={styles.pwaPromptShareIcon} modern={isiOS13} />
            <p className={`${styles.pwaPromptCopy} ${styles.bold}`}>
              {copyShareButtonLabel || `1) Press the 'Share' button`}
            </p>
          </div>
          <div className={styles.pwaPromptInstructionStep}>
            <HomeScreenIcon
              className={styles.pwaPromptHomeIcon}
              modern={isiOS13}
            />
            <p className={`${styles.pwaPromptCopy} ${styles.bold}`}>
              {copyAddHomeButtonLabel || `2) Press 'Add to Home Screen'`}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PWAPrompt;
