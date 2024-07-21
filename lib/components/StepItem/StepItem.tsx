import styles from "./stepItem.module.css";

type Props = {
  Icon: React.ReactElement;
  copy: string;
};

export const StepItem = ({ Icon, copy }: Props) => {
  return (
    <li className={`${styles.stepItem} iOSPWA-stepItem`}>
      {Icon}
      <p className={styles.copy}>{copy}</p>
    </li>
  );
};
