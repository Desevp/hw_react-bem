import * as React from 'react';
import './style.scss';

type Props = {
  className: string
};

const IconBase = (props: Props) => {
  const { className } = props;
  return (
    <div className={className} />
  );
};

export default IconBase;
