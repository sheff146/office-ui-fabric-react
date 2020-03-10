import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { InputProps, InputState } from '../../../../components/Input/Input';
import { InputVariables } from './inputVariables';
import { PositionProperty } from 'csstype';
import clearIndicatorUrl from './clearIndicatorUrl';
import { pxToRem } from '../../../../utils';

const inputStyles: ComponentSlotStylesPrepared<InputProps & InputState, InputVariables> = {
  root: ({ props: p }): ICSSInJSStyle => ({
    alignItems: 'center',
    display: 'inline-flex',
    position: 'relative',
    outline: 0,

    ...(p.fluid && { width: '100%' })
  }),

  input: ({ props: p, variables: v }): ICSSInJSStyle => ({
    backgroundColor: v.backgroundColor,
    ...(p.inverted && {
      backgroundColor: v.backgroundColorInverted
    }),

    lineHeight: 'unset',

    color: v.fontColor,

    borderColor: v.borderColor,
    borderRadius: v.borderRadius,
    borderStyle: 'solid',
    borderWidth: v.borderWidth,

    outline: 0,
    padding: v.inputPadding,
    position: 'relative',

    ...(p.fluid && { width: '100%' }),
    ...(p.inline && { float: 'left' }),

    '::placeholder': {
      color: v.placeholderColor,
      opacity: 1 // undo Firefox default opacity
    },

    ':focus': {
      borderColor: v.inputFocusBorderColor
    },
    ...(p.clearable && { padding: v.inputPaddingWithIconAtEnd }),
    ...(p.icon && {
      padding: p.iconPosition === 'start' ? v.inputPaddingWithIconAtStart : v.inputPaddingWithIconAtEnd
    })
  }),

  icon: ({ props: p, variables: v }): ICSSInJSStyle => ({
    color: v.iconColor,
    outline: 0,
    position: v.iconPosition as PositionProperty,

    ...(p.iconPosition === 'start' && {
      left: v.iconLeft
    }),
    ...(p.iconPosition === 'end' && {
      right: v.iconRight
    }),

    ...(p.clearable &&
      p.hasValue && {
        backgroundImage: clearIndicatorUrl(v.iconColor),
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: pxToRem(16)
      })
  })
};

export default inputStyles;
