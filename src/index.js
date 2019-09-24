import React, { Fragment, useEffect, useState } from "react";

import ShareIcon from "./components/ShareIcon";
import HomeScreenIcon from "./components/HomeScreenIcon";

import styles from "./style.scss";

export default ({ delay = 1000, title = undefined, copy = undefined }) => {
  const [hasBeenDismissed, setDismissed] = useState(
    localStorage.getItem("hasSeenPWAPrompt")
  );
  const [isVisible, setVisibility] = useState(!Boolean(delay));

  useEffect(() => {
    if (!hasBeenDismissed && delay) {
      setTimeout(() => setVisibility(true), delay);
    }
  }, []);

  if (!hasBeenDismissed) {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isiOS = () => {
      return /iphone|ipad|ipod/.test(userAgent);
    };
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && window.navigator.standalone;

    if (isiOS() && !isInStandaloneMode()) {
      const dismissPrompt = () => {
        localStorage.setItem("hasSeenPWAPrompt", true);
        setVisibility(false);
      };

      const isiOS13 = /os 13/.test(userAgent);

      const visibilityClass = isVisible ? styles.visible : styles.hidden;
      const iOSClass = isiOS13 ? styles.modern : "legacy";

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
                {title || `Add to Home Screen`}
              </p>
              <button
                className={styles.pwaPromptCancel}
                onClick={dismissPrompt}
              >
                Cancel
              </button>
            </div>
            <div className={styles.pwaPromptBody}>
              <div className={styles.pwaPromptDescription}>
                <p id="pwa-prompt-description" className={styles.pwaPromptCopy}>
                  {copy ||
                    `This website has app functionality. Add it to your home screen
                  to use it in fullscreen and while offline.`}
                </p>
              </div>
            </div>
            <div className={styles.pwaPromptInstruction}>
              <div className={styles.pwaPromptInstructionStep}>
                <ShareIcon
                  className={styles.pwaPromptShareIcon}
                  modern={isiOS13}
                />
                <p className={`${styles.pwaPromptCopy} ${styles.bold}`}>
                  1) Press the 'Share' button
                </p>
              </div>
              <div className={styles.pwaPromptInstructionStep}>
                <HomeScreenIcon
                  className={styles.pwaPromptHomeIcon}
                  modern={isiOS13}
                />
                <p className={`${styles.pwaPromptCopy} ${styles.bold}`}>
                  2) Press 'Add to Home Screen'
                </p>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      localStorage.setItem("hasSeenPWAPrompt", true);
    }
  }

  return null;
};
