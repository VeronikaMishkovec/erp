import { StylesTypes } from '../../rootTypes';

export type StyleProps = Pick<
  StylesTypes,
  'container' | 'header' | 'innerView' | 'label' | 'pressableIcon'
>;
