import { IconClose } from "../IconClose";

import styles from "./closeButton.module.css";

type Props = {
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
};

export const CloseButton = ({ onClose }: Props) => {
  return (
    <button
      className={`${styles.closeButton} iOSPWA-closeButton`}
      onClick={onClose}
    >
      <IconClose />
    </button>
  );
};
