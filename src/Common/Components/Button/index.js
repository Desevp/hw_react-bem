import { compose } from '@bem-react/core';

import Base from './Button';
import ButtonMarked from './_isMarked/Button_marked';

const Button = compose(
  ButtonMarked
)(Base);

export default Button;
