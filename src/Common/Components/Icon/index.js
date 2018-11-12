import { compose } from '@bem-react/core';

import IconBase from './Icon';
import IconTypeStats from './_type/Icon_type_stats';


const Icon = compose(
  IconTypeStats
)(IconBase);

export default Icon;
