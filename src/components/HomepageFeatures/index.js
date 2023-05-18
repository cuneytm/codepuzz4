import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: 'Bilgi ve Tecrübeyi Paylaş',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
       Sadece temel bilgileri değil, bu bilgilerin hayata geçtiği pratik uygulamaları da deneyimle!
      </>
    ),
  },
  {
    title: 'Yeni Konular Keşfet',
    Svg: require('@site/static/img/brain.svg').default,
    description: (
      <>
        Kendini geliştirecek yeni rekabet konularını keşfet.
      </>
    ),
  },
  {
    title: 'Yarattıkça ve Başardıkça Mutlu Ol',
    Svg: require('@site/static/img/personal.svg').default,
    description: (
      <>
        Yaratıcılığını öne çıkar vizyoner ol
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
