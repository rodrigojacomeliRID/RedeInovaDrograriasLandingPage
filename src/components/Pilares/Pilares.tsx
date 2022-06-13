import Image from 'next/image';
import styles from './pilares.module.scss';

export function Pilares() {
  return (
    <section className={styles.S__Pilares}>
      <header>
        <h1>Nossos pilares</h1>
      </header>
      <main>
        <div className={styles.pilarContent}>
          <Image
            src='/images/maozinhas.png'
            alt='pilar'
            quality={100}
            width={120}
            height={120}
            objectFit='fill'
          />
          <span>Foco no cliente</span>
        </div>
        <div className={styles.pilarContent}>
          <Image
            src='/images/graficos.png'
            alt='pilar'
            quality={100}
            width={120}
            height={120}
            objectFit='fill'
          />
          <span>Melhoria contínua</span>
        </div>
        <div className={styles.pilarContent}>
          <Image
            src='/images/colaboracao.png'
            alt='pilar'
            quality={100}
            width={120}
            height={120}
            objectFit='fill'
          />
          <span>Valorização das pessoas</span>
        </div>
        <div className={styles.pilarContent}>
          <Image
            src='/images/tech.png'
            alt='pilar'
            quality={100}
            width={120}
            height={120}
            objectFit='fill'
          />
          <span>Tecnologia e Inovação</span>
        </div>
      </main>
    </section>
  );
}
