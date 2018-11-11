import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';
import Button from '../../Common/Components/Button';

const cnHeader = cn('WelcomeShri');

const Header = () => (
  <div className="header">
    <div className={cnHeader()}>
      dsf
    </div>
    <Button type="link" theme="action" text="BEM button" />

    <div className="header__test">
      Header
    </div>
  </div>
);

export default Header;
