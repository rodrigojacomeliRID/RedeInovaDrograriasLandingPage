import styles from './nav.module.scss';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <img
        src='/images/logo.svg'
        alt='Logo Rede Inova Drogarias'
      />
    </nav>
  );
}
