import * as React from 'react';

type Props = {
  text: string,
  className: string
};

const Button = (props: Props) => {
  const { text, className } = props;
  return (
    <div className={className}>
      <div>
        {text}
      </div>
      <div>  desktop </div>
    </div>
  );
};

export default Button;
