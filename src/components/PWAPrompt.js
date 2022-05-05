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
  maxVisits,
  onClose,
  dir,
  font_family,
}) => {
  const [isVisible, setVisibility] = useState(!Boolean(delay));

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        // Prevent keyboard appearing over the prompt if a text input has autofocus set
        if (document.activeElement) {
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

  const isiOS13AndUp = /OS (13|14)/.test(window.navigator.userAgent);
  const visibilityClass = isVisible ? styles.visible : styles.hidden;
  const iOSClass = isiOS13AndUp ? styles.modern : "legacy";
  const marginText = dir === "ltr" ? {marginLeft : 32} : {marginRight: 32};
  const customFontFamily = {fontFamily: font_family};

  const dismissPrompt = (evt) => {
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

    if (typeof onClose === "function") {
      onClose(evt);
    }
  };

  const onTransitionOut = (evt) => {
    if (!isVisible) {
      evt.currentTarget.style.display = "none";
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
        <div dir={dir} className={`${styles.pwaPromptHeader} iOSPWA-header`}>
          <p
            id="pwa-prompt-title"
            className={`${styles.pwaPromptTitle} iOSPWA-title`}
            style={customFontFamily}
          >
            {copyTitle}
          </p>
          <button
            className={`${styles.pwaPromptCancel} iOSPWA-cancel`}
            onClick={dismissPrompt}
            style={customFontFamily}
          >
            {copyClosePrompt}
          </button>
        </div>
        <div dir={dir} className={`${styles.pwaPromptBody} iOSPWA-body`}>
          <div className={`${styles.pwaPromptDescription} iOSPWA-description`}>
            <p
              id="pwa-prompt-description"
              className={`${styles.pwaPromptCopy} iOSPWA-description-copy`}
              style={customFontFamily}
            >
              {copyBody}
            </p>
          </div>
        </div>
        <div dir={dir} className={`${styles.pwaPromptInstruction} iOSPWA-steps`}>
          <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step1`}>
            <ShareIcon
              className={`${styles.pwaPromptShareIcon} iOSPWA-step1-icon`}
              modern={isiOS13AndUp}
            />
            <p
              className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step1-copy`}
              style={Object.assign(customFontFamily, marginText)}
            >
              {copyShareButtonLabel}
            </p>
          </div>
          <div className={`${styles.pwaPromptInstructionStep} iOSPWA-step2`}>
            <HomeScreenIcon
              className={`${styles.pwaPromptHomeIcon} iOSPWA-step2-icon`}
              modern={isiOS13AndUp}
            />
            <p
              className={`${styles.pwaPromptCopy} ${styles.bold} iOSPWA-step2-copy`}
              style={Object.assign(customFontFamily, marginText)}
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
