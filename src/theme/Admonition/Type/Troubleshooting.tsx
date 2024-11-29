import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Caution';
import AdmonitionLayout from '@theme/Admonition/Layout';
import AdmonitionIconTroubleShooting from "@site/src/theme/Admonition/Icon/Troubleshooting";

const infimaClassName = 'alert alert--warning';

const defaultProps = {
  icon: <AdmonitionIconTroubleShooting />,
  title: (
    <Translate
      id="theme.admonition.troubleshooting"
      description="The default label used for the Troubleshooting admonition (:::troubleshooting)">
      Решение проблем
    </Translate>
  ),
};

export default function AdmonitionTypeTroubleshooting(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}