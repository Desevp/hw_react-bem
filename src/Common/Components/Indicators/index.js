import React from 'react';
import './style.scss';
import { cn } from '@bem-react/classname';

const cnIndicators = cn('Indicators');

type Props = {
  className: string,
  temperatureValue: string,
  humidityValue: string
};

const Indicators = (props: Props) => {
  const { className, temperatureValue, humidityValue } = props;
  return (
    <div className={`${cnIndicators()} ${className}`}>
      <div className={cnIndicators('Item')}>
        <span className={cnIndicators('Name')}>
          Температура:
        </span>
        <span className={cnIndicators('Value', { type: 'temperature' })}>
          {` ${temperatureValue}`}
        </span>
      </div>
      <div className={cnIndicators('Item')}>
        <span className={cnIndicators('Name')}>
          Влажность:
        </span>
        <span className={cnIndicators('Value', { type: 'humidity' })}>
          {` ${humidityValue}`}
        </span>
      </div>
    </div>
  );
};

export default Indicators;
