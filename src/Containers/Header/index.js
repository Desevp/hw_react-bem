import React, { memo } from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';
import Logo from '../Logo';
import Nav from '../Nav';
import Burger from '../Burger';

const cnHeader = cn('Header');

const Header = memo(() => (
  <>
    <div className={cnHeader()}>
      <div className={cnHeader('Inner')}>
        <Logo className={cnHeader('Logo', [Logo])} />
        <Nav className={cnHeader('Nav', [Nav])} />
        <Burger className={cnHeader('Burger', [Burger])} />
      </div>
    </div>
    <div className={cnHeader('Pseudo')} />
  </>
));

export default Header;
