import { compose } from '@bem-react/core';

import Base from './Button';
import ButtonTypeLink from './_type/Button_type_link';
import ButtonThemeAction from './_theme/Button_theme_action';


// composition of all variations
// JSX → <Button text="Hello" type="link" theme="action" /> gives
// HTML → <a class="Button Button_type_link Button_theme_action">Hello</a>
const Button = compose(
  ButtonThemeAction,
  ButtonTypeLink
)(Base);

export default Button;
