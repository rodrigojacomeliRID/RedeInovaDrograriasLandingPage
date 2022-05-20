import styles from './form.module.scss';

export function Form() {
  return (
    <section className={styles.S__form}>
      <main className={styles.mainContent}>
        <div className={styles.description}>
          <h2>TENHO UMA FARMÁCIA E QUERO ME TORNAR</h2>
          <h1>REDE INOVA</h1>
          <p>
            Preencha os dados para que um dos nossos consultores faça uma rápida
            análise do seu perfil e te oriente sobre como se tornar um
            licenciado.
          </p>
          <h3>
            COM A REDE INOVA, VOCÊ PASSARÁ A TER MAIS CONTROLE DO SEU NEGÓCIO,
            RESULTANDO EM:
          </h3>
          <ul>
            <li>• Mais informações estratégicas do seu negócio</li>
            <li>• Mais tempo gerenciando o seu negócio</li>
            <li>• Mensurar com mais assertividade os seus indicadores</li>
            <li>• Proporcionar condições comerciais diferenciadas</li>
          </ul>
        </div>
        <div className={styles.form}>
          <div
            role='main'
            id='formulario-teste-jacomeli-80d478c8189c4f25cc06'
          ></div>
        </div>
      </main>
    </section>
  );
}
