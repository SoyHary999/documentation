import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Logz.io quick start guide',
    link: "/docs/user-guide/logzio/quick-start",
    Svg: require('@site/static/img/quick-start.svg').default,
    description: <>Learn how to make the most out of the Logz.io platform.</>,
  },
  {
    title: 'Telemetry Collector',
    link: "/docs/user-guide/shipping-parsing/telemetry-collector/",
    Svg: require('@site/static/img/telemetry-collector.svg').default,
    description: <>Send logs, metrics, and traces data quickly and easily.</>,
  },
  {
    title: 'Kubernetes 360',
    link: "/docs/user-guide/k8s-360/overview",
    Svg: require('@site/static/img/k8s.svg').default,
    description: <>Monitor and troubleshoot applications deployed in Kubernetes environments.</>,
  },
  {
    title: 'OpenSearch Dashboards',
    link: "/docs/user-guide/log-management/opensearch-dashboards/",
    Svg: require('@site/static/img/opensearch.svg').default,
    description: <>Stay on top of your logs with rich visualizations.</>,
  },
  {
    title: 'Logz.io integrations',
    link: "/docs/telemetry-shipping/",
    Svg: require('@site/static/img/integrations.svg').default,
    description: <>All the different ways to send your data to Logz.io.</>,
  },
  {
    title: 'API',
    link: "https://docs.logz.io/api/",
    Svg: require('@site/static/img/api.svg').default,
    description: <>Grow your own integration.</>,
  },
  {
    title: 'Alerting',
    link: "/docs/user-guide/log-management/log-alerts/intro",
    Svg: require('@site/static/img/alert.svg').default,
    description: <>Set up alerts to get notified of critical events in your logs.</>,
  },
  {
    title: 'Log troubleshooting',
    link: "/docs/user-guide/log-management/troubleshooting/log-shipping-troubleshooting",
    Svg: require('@site/static/img/troubleshooting.svg').default,
    description: <>Troubleshoot common log related issues.</>,
  },
  {
    title: 'Your accounts',
    link: "/docs/user-guide/admin/logzio-accounts/accounts",
    Svg: require('@site/static/img/accounts.svg').default,
    description: <>Manage your accounts & optimize costs.</>,
  },
  {
    title: 'Free trial',
    link: "https://logz.io/freetrial/",
    description: <></>,
  },
  {
    title: 'Webinars',
    link: "https://logz.io/learn/webinar/",
    description: <></>,
  },
  {
    title: 'Features',
    link: "https://logz.io/learn/product/",
    description: <></>,
  },
];


function Feature({Svg, title, description, link}, index) {
  return (
    <Link to={link} className={clsx('col col--3', styles.featureCard, index >= 9 ? styles.smallCard : '')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featuresContainer)}>
        <div className={clsx('row', styles.centeredRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

