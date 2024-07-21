import styles from "./panel.module.css";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
};

export const Panel = ({ children, isOpen }: Props) => {
  return (
    <div
      className={`${styles.panel} ${isOpen && styles.visible} iOSPWA-panel`}
      aria-describedby="pwa-prompt-description"
      aria-labelledby="pwa-prompt-title"
      role="dialog"
    >
      {children}
    </div>
  );
};
