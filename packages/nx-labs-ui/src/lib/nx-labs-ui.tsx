import styles from './nx-labs-ui.module.css';

/* eslint-disable-next-line */
export interface NxLabsUiProps {}

export function NxLabsUi(props: NxLabsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to {process.env.NX_LABS_UI}</h1>
    </div>
  );
}

export default NxLabsUi;
