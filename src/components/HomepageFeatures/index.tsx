import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Запись на текущий день без риска переполнения очереди',
    Svg: require('@site/static/images/tild3936-3536-4239-b937-656430313466__list.svg').default,
    description: (
      <>
        Сервис в режиме реального времени планирует обслуживание электронной очереди,
        распределяя посетителей между окнами обслуживания с учетом услуги и прочих факторов
      </>
    ),
  },
  {
    title: 'Удобное мобильное приложение',
    Svg: require('@site/static/images/tild3633-6663-4361-b265-376164643463__phone.svg').default,
    description: (
      <>
        Через мобильное приложение можно записаться на
        нужное время в ближайший офис, где есть свободное окно для выбранной услуги,
        редактировать или отменять запись, получать уведомления о вызове к точке обслуживания
        и готовности документов на выдачу
      </>
    ),
  },
  {
    title: 'Работает без номеров и бумажных талонов',
    Svg: require('@site/static/images/tild3235-3333-4162-b864-363737623734__frame_337_2.svg').default,
    description: (
      <>
        Запись на услугу полностью персонализирована. Экранный и голосовой вызов к
        окну обслуживания производится по имени и отчеству посетителя
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4 padding-vert--md')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
