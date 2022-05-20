import styles from './pilares.module.scss';

export function Pilares() {
  return (
    <section className={styles.S__Pilares}>
      <header>
        <h1>Nossos pilares</h1>
      </header>
      <main>
        <div className={styles.pilarContent}>
          <img src='/images/maozinhas.png' alt='pilar' />
          <span>Foco no cliente</span>
        </div>
        <div className={styles.pilarContent}>
          <img src='/images/graficos.png' alt='pilar' />
          <span>Melhoria contínua</span>
        </div>
        <div className={styles.pilarContent}>
          <img src='/images/colaboracao.png' alt='pilar' />
          <span>Valorização das pessoas</span>
        </div>
        <div className={styles.pilarContent}>
          <img src='/images/tech.png' alt='pilar' />
          <span>Tecnologia e Inovação</span>
        </div>
      </main>
    </section>
  );
}
