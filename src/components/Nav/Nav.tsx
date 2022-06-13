import Image from 'next/image';
import styles from './nav.module.scss';

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Image
        src='/images/logo.svg'
        alt='Logo Rede Inova Drogarias'
        width={150}
        height={70}
        quality={100}
        objectFit="fill"
      />
    </nav>
  );
}
