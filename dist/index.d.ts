import React from "react";
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
declare const Prompt: {
    ({ timesToShow, promptOnVisit, permanentlyHideOnDismiss, copyTitle, copyBody, copyShareButtonLabel, copyAddHomeButtonLabel, copyClosePrompt, delay, debug, }: PromptProps): React.ReactNode;
    defaultProps: {
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
    };
};
export default Prompt;
