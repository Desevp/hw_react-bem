import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

const cnHeader = cn('WelcomeShri');

const Header = () => (
  <div className={cnHeader()}>
    <div className="header__test">
      Header
    </div>
  </div>
);

export default Header;
