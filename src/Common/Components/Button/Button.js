import * as React from 'react';
import { cn, classnames } from '@bem-react/classname';
import './style.scss';

type Props = {
  text: string,
  className: string
};

const cnButton = cn('Button');

const Base = (props: Props) => {
  if (!props) {
    return null;
  }
  const { text, className } = props;
  return (
    <button className={classnames(cnButton(), className)} type="button" name="button">
      {text}
    </button>
  );
};

export default Base;
