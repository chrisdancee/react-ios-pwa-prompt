import { CloseButton } from "../CloseButton";

import styles from "./header.module.css";

type Props = {
  appIconPath: string;
  copySubtitle: string;
  copyTitle: string;
  onClose: (evt: React.MouseEvent<HTMLElement>) => void;
};

export const Header = ({
  appIconPath,
  copySubtitle,
  copyTitle,
  onClose,
}: Props) => {
  return (
    <div className={`${styles.header} iOSPWA-header`}>
      <div className={styles.appInfo}>
        <img className={styles.appIcon} src={appIconPath} />
        <div className={styles.appTitleContainer}>
          <span className={styles.appTitle}>{copyTitle}</span>
          <span className={styles.appSubtitle}>{copySubtitle}</span>
        </div>
      </div>
      <CloseButton onClose={onClose} />
    </div>
  );
};
