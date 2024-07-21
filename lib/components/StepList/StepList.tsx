import { IconAddToHomeScreen } from "../IconAddToHomeScreen";
import { IconShare } from "../IconShare";
import { StepItem } from "../StepItem";

import styles from "./stepList.module.css";

type Props = {
  copyAddToHomeScreenStep: string;
  copyShareStep: string;
};

export const StepList = ({ copyAddToHomeScreenStep, copyShareStep }: Props) => {
  return (
    <ol className={`${styles.list} iOSPWA-stepList`}>
      <StepItem copy={copyShareStep} Icon={<IconShare />} />
      <StepItem copy={copyAddToHomeScreenStep} Icon={<IconAddToHomeScreen />} />
    </ol>
  );
};
