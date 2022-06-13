import Image from 'next/image';
import Link from 'next/link';
import styles from './enterprise.module.scss';

export function Enterprise() {
  return (
    <section className={styles.S__Enterprise}>
      <main className={styles.mainContent}>
        <div className={styles.image}>
          <Image
            src='/images/ad_rede.jpg'
            alt='Rede Inova informações'
            width={650}
            height={650}
            quality={100}
            objectFit='cover'
          />
        </div>
        <div className={styles.description}>
          <h2>#VEMSERINOVA</h2>
          <p>
            Para atender com padrão de excelência suas centenas de licenciados,
            a Rede Inova Drogarias conta hoje com infraestrutura moderna e
            totalmente dimensionada para oferecer as melhores soluções para o
            ramo farmacêutico. Nossa vocação e nosso orgulho estão em oferecer
            soluções criativas e inovadoras para que nossos parceiros possam
            promover, cada dia mais, o bem estar, a saúde e, sobretudo, a
            qualidade de vida de seus clientes, agregando valor para o seu
            negócio e toda a sua cadeia produtiva.
          </p>
        </div>
      </main>
      <Link
        className={styles.buttonConsultor}
        href='https://api.whatsapp.com/send?phone=553332713016'
        target='_self'
      >
        Fale com nosso consultor
      </Link>
    </section>
  );
}
