import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

import logoImage from '../../Common/assets/logo.svg';

const cnLogo = cn('Logo');

type Props = {
  className: string
};

const Logo = (props: Props) => {
  const { className } = props;
  return (
    <div className={`${cnLogo()} ${className}`}>
      <picture className={cnLogo('Img')}>
        <source type="image/svg+xml" srcSet={logoImage} />
        <img src={logoImage} alt="logo" />
      </picture>
    </div>
  );
};

export default Logo;
