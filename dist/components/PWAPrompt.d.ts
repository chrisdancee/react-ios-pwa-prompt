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
    onClose?: () => void;
}
declare const PWAPrompt: ({ delay, copyTitle, copyBody, copyAddHomeButtonLabel, copyShareButtonLabel, copyClosePrompt, permanentlyHideOnDismiss, promptData, maxVisits, onClose, }: PWAPromptProps) => JSX.Element;
export default PWAPrompt;
