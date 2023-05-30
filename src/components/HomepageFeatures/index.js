import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [

  {
    title: 'Yeni Konular Keşfet',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Codepuzz İçerisinde Deneyimlenmiş, Pratikte Sana Gerekli Olabilecek Konuları Bulabilirsin 🔥
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--')}>
      <div className="text--center">
        <div className={styles.featureSvgContainer}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
