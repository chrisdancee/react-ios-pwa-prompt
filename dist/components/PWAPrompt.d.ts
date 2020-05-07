/// <reference types="react" />
import { PromptData } from "../index";
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
}
declare const PWAPrompt: ({ delay, copyTitle, copyBody, copyAddHomeButtonLabel, copyShareButtonLabel, copyClosePrompt, permanentlyHideOnDismiss, promptData, maxVisits, }: PWAPromptProps) => JSX.Element;
export default PWAPrompt;
