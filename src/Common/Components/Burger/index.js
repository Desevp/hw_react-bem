import React, { memo } from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

const cnBurger = cn('Burger');

type Props = {
  className: string
};

const Burger = memo((props: Props) => {
  const { className } = props;
  return (
    <button type="button" className={`${cnBurger()} ${className}`}>
      <div className={cnBurger('Line')} />
      <div className={cnBurger('Line')} />
      <div className={cnBurger('Line')} />
    </button>
  );
});


export default Burger;
