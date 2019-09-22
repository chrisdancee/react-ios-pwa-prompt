import React, { Fragment, useEffect, useState } from "react";

import ShareIcon from "./components/ShareIcon";
import HomeScreenIcon from "./components/HomeScreenIcon";

import "./style.scss";

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

      const visibilityClass = isVisible ? "visible" : "hidden";
      const iOSClass = isiOS13 ? "modern" : "legacy";

      return (
        <Fragment>
          <div
            className={`pwa-prompt-overlay ${visibilityClass} ${iOSClass}`}
            aria-label="Close"
            role="button"
            onClick={dismissPrompt}
          />
          <div
            className={`pwa-prompt ${visibilityClass} ${iOSClass}`}
            aria-describedby="pwa-prompt-description"
            aria-labelledby="pwa-prompt-title"
            role="dialog"
          >
            <div className="pwa-prompt-header">
              <p id="pwa-prompt-title" className="pwa-prompt-title">
                {title || `Add to Home Screen`}
              </p>
              <button className="pwa-prompt-cancel" onClick={dismissPrompt}>
                Cancel
              </button>
            </div>
            <div className="pwa-prompt-body">
              <div className="pwa-prompt-description">
                <p id="pwa-prompt-description" className="pwa-prompt-copy">
                  {copy ||
                    `This website has app functionality. Add it to your home screen
                  to use it in fullscreen and while offline.`}
                </p>
              </div>
            </div>
            <div className="pwa-prompt-instruction">
              <div className="pwa-prompt-instruction-step">
                <ShareIcon className="pwa-prompt-share-icon" modern={isiOS13} />
                <p className="pwa-prompt-copy bold">
                  1) Press the 'Share' button
                </p>
              </div>
              <div className="pwa-prompt-instruction-step">
                <HomeScreenIcon
                  className="pwa-prompt-home-icon"
                  modern={isiOS13}
                />
                <p className="pwa-prompt-copy bold">
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
