import React, { memo } from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';
import Logo from '../../Common/Components/Logo';
import Nav from '../../Common/Components/Nav';
import Burger from '../../Common/Components/Burger';

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
