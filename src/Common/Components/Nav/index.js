import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

const cnNav = cn('Nav');

type Props = {
  className: string
};

const Nav = (props: Props) => {
  const { className } = props;
  return (
    <nav className={`${cnNav()} ${className}`}>
      <ul>
        <li className={cnNav('Item', { isActive: true })}>
          <a href="event">События</a>
        </li>
        <li className={cnNav('Item')}>
          <a href="devices">Устройства</a>
        </li>
        <li className={cnNav('Item')}>
          <a href="scripts">Сценарии</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
