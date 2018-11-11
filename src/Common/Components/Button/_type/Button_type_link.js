import * as React from 'react';
import { withBemMod, ModBody } from '@bem-react/core';
import { cn } from '@bem-react/classname';

const cnButton = cn('Button1');

const ButtonLink: ModBody = (Base, { text, className }) => (
  // className === 'Button Button_type_link'
  <a href="#f" className={className}>
    {text}
  </a>
);

const ButtonTypeLink = withBemMod(`${cnButton()}`, { type: 'link' }, ButtonLink);
export default ButtonTypeLink;
