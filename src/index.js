import React, { Fragment, useEffect, useState } from "react";

import PWAPrompt from "./components/PWAPrompt";

const deviceCheck = () => {
    const isiOS = /iphone|ipad|ipod/.test(
        window.navigator.userAgent.toLowerCase()
    );
    const isStandalone =
        "standalone" in window.navigator && window.navigator.standalone;

    return isiOS && !isStandalone;
};

export default ({
    timesToShow = 1,
    promptOnVisit = 1,
    title = undefined,
    copy = undefined,
    copyAddHomeButtonLabel = undefined,
    copyShareButtonLabel = undefined,
    copyClosePrompt = undefined,
    delay = 1000
}) => {
    let promptData = JSON.parse(localStorage.getItem("iosPwaPrompt"));

    if (promptData === null) {
        promptData = { isiOS: deviceCheck(), visits: 0 };
        localStorage.setItem("iosPwaPrompt", JSON.stringify(promptData));
    }

    if (promptData.isiOS) {
        const aboveMinVisits = promptData.visits + 1 >= promptOnVisit;
        const belowMaxVisits = promptData.visits + 1 < promptOnVisit + timesToShow;

        if (belowMaxVisits) {
            localStorage.setItem(
                "iosPwaPrompt",
                JSON.stringify({
                    ...promptData,
                    visits: promptData.visits + 1
                })
            );

            if (aboveMinVisits) {
                return (
                    <PWAPrompt
                        delay={delay}
                        title={title}
                        copy={copy}
                        copyAddHomeButtonLabel={copyAddHomeButtonLabel}
                        copyShareButtonLabel={copyShareButtonLabel}
                        copyClosePrompt={copyClosePrompt}
                    />
                );
            }
        }
    }

    return null;
};
