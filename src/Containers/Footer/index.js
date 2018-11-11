import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

const cnFooter = cn('Footer');

type Props = {
  className: string
};

const Footer = (props: Props) => {
  if (!props) {
    return false;
  }
  const { className } = props;
  return (
    <footer className={`${cnFooter()} ${className}`}>
      <div className={cnFooter('Inner')}>
        ФУТЕР
      </div>
    </footer>
  );
};

export default Footer;
