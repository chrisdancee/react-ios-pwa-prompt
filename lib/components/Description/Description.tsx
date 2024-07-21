import styles from "./description.module.css";

type Props = {
  copyDescription: string;
};

export const Description = ({ copyDescription }: Props) => {
  return (
    <div className={`${styles.description} iOSPWA-description`}>
      {copyDescription}
    </div>
  );
};
