import * as React from 'react';

type Props = {
  text: string,
  className: string
};

const Base = (props: Props) => {
  if (!props) {
    return null;
  }
  const { text, className } = props;
  return (
    <div className={className}>
      {text}
    </div>
  );
};

export default Base;
