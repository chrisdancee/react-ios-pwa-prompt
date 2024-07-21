import styles from "./overlay.module.css";

type Props = {
  isOpen: boolean;
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
};

export const Overlay = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`${styles.overlay} ${isOpen && styles.visible} iOSPWA-overlay`}
      aria-label="Close"
      role="button"
      onClick={onClose}
    />
  );
};
