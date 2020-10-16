var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { Fragment, useEffect, useState } from "react";
import ShareIcon from "./ShareIcon";
import HomeScreenIcon from "./HomeScreenIcon";
// @ts-ignore
import * as styles from "./PWAPrompt.styles.scss";
var PWAPrompt = function (_a) {
    var delay = _a.delay, copyTitle = _a.copyTitle, copyBody = _a.copyBody, copyAddHomeButtonLabel = _a.copyAddHomeButtonLabel, copyShareButtonLabel = _a.copyShareButtonLabel, copyClosePrompt = _a.copyClosePrompt, permanentlyHideOnDismiss = _a.permanentlyHideOnDismiss, promptData = _a.promptData, maxVisits = _a.maxVisits, _b = _a.onClose, onClose = _b === void 0 ? function () { } : _b;
    var _c = useState(!delay), isVisible = _c[0], setVisibility = _c[1];
    useEffect(function () {
        if (delay) {
            setTimeout(function () {
                // Prevent keyboard appearing over the prompt if a text input has autofocus set
                if (document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
                setVisibility(true);
            }, delay);
        }
    }, []);
    useEffect(function () {
        if (isVisible) {
            document.body.classList.add(styles.noScroll);
        }
    }, [isVisible]);
    var isiOS13 = /OS 13/.test(window.navigator.userAgent);
    var visibilityClass = isVisible ? styles.visible : styles.hidden;
    var iOSClass = isiOS13 ? styles.modern : "legacy";
    var dismissPrompt = function () {
        document.body.classList.remove(styles.noScroll);
        setVisibility(false);
        if (permanentlyHideOnDismiss) {
            localStorage.setItem("iosPwaPrompt", JSON.stringify(__assign(__assign({}, promptData), { visits: maxVisits })));
        }
        onClose();
    };
    var onTransitionOut = function (event) {
        if (!isVisible) {
            event.currentTarget.style.display = "none";
            onClose();
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement("div", { className: styles.pwaPromptOverlay + " " + visibilityClass + " " + iOSClass + " iOSPWA-overlay", "aria-label": "Close", role: "button", onClick: dismissPrompt, onTransitionEnd: onTransitionOut }),
        React.createElement("div", { className: styles.pwaPrompt + " " + visibilityClass + " " + iOSClass + " iOSPWA-container", "aria-describedby": "pwa-prompt-description", "aria-labelledby": "pwa-prompt-title", role: "dialog", onTransitionEnd: onTransitionOut },
            React.createElement("div", { className: styles.pwaPromptHeader + " iOSPWA-header" },
                React.createElement("p", { id: "pwa-prompt-title", className: styles.pwaPromptTitle + " iOSPWA-title" }, copyTitle),
                React.createElement("button", { className: styles.pwaPromptCancel + " iOSPWA-cancel", onClick: dismissPrompt }, copyClosePrompt)),
            React.createElement("div", { className: styles.pwaPromptBody + " iOSPWA-body" },
                React.createElement("div", { className: styles.pwaPromptDescription + " iOSPWA-description" },
                    React.createElement("p", { id: "pwa-prompt-description", className: styles.pwaPromptCopy + " iOSPWA-description-copy" }, copyBody))),
            React.createElement("div", { className: styles.pwaPromptInstruction + " iOSPWA-steps" },
                React.createElement("div", { className: styles.pwaPromptInstructionStep + " iOSPWA-step1" },
                    React.createElement(ShareIcon, { className: styles.pwaPromptShareIcon + " iOSPWA-step1-icon", modern: isiOS13 }),
                    React.createElement("p", { className: styles.pwaPromptCopy + " " + styles.bold + " iOSPWA-step1-copy" }, copyShareButtonLabel)),
                React.createElement("div", { className: styles.pwaPromptInstructionStep + " iOSPWA-step2" },
                    React.createElement(HomeScreenIcon, { className: styles.pwaPromptHomeIcon + " iOSPWA-step2-icon", modern: isiOS13 }),
                    React.createElement("p", { className: styles.pwaPromptCopy + " " + styles.bold + " iOSPWA-step2-copy" }, copyAddHomeButtonLabel))))));
};
export default PWAPrompt;
//# sourceMappingURL=PWAPrompt.js.map