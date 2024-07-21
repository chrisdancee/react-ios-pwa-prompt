import { useEffect, useState } from "react";

import { Description } from "../Description";
import { Divider } from "../Divider";
import { Header } from "../Header";
import { Overlay } from "../Overlay";
import { Panel } from "../Panel";
import { StepList } from "../StepList";

import styles from "./container.module.css";

type Props = {
  appIconPath: string;
  copyAddToHomeScreenStep: string;
  copyDescription: string;
  copyShareStep: string;
  copySubtitle: string;
  copyTitle: string;
  delay: number;
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
};

export const Container = ({
  appIconPath,
  copyAddToHomeScreenStep,
  copyDescription,
  copyShareStep,
  copySubtitle,
  copyTitle,
  delay,
  onClose,
}: Props) => {
  const [isOpen, setIsOpen] = useState(!Boolean(delay));

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        (document?.activeElement as HTMLElement)?.blur();
        setIsOpen(true);
      }, delay);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.noScroll);
    }
  }, [isOpen]);

  const dismissPrompt = (evt: React.MouseEvent<HTMLElement>) => {
    document.body.classList.remove(styles.noScroll);
    setIsOpen(false);

    if (typeof onClose === "function") {
      onClose(evt);
    }
  };

  return (
    <div className={styles.container}>
      <Overlay isOpen={isOpen} onClose={dismissPrompt} />
      <Panel isOpen={isOpen}>
        <Header
          appIconPath={appIconPath}
          copySubtitle={copySubtitle}
          copyTitle={copyTitle}
          onClose={dismissPrompt}
        />
        <Divider />
        <Description copyDescription={copyDescription} />
        <Divider />
        <StepList
          copyShareStep={copyShareStep}
          copyAddToHomeScreenStep={copyAddToHomeScreenStep}
        />
      </Panel>
    </div>
  );
};
