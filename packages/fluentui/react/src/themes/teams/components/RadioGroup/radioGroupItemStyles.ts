import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import RadioGroupItem, { RadioGroupItemProps, RadioGroupItemState } from '../../../../components/RadioGroup/RadioGroupItem';
import { RadioGroupItemVariables } from './radioGroupItemVariables';
import { pxToRem } from '../../../../utils';
import getBorderFocusStyles from '../../getBorderFocusStyles';

const restHoverFocusTextColor = textColor => ({
  color: textColor,

  ':hover': {
    color: textColor
  },

  ':focus': {
    color: textColor
  }
});

const radioStyles: ComponentSlotStylesPrepared<RadioGroupItemProps & RadioGroupItemState, RadioGroupItemVariables> = {
  root: ({ props: p, variables: v, theme: { siteVariables } }): ICSSInJSStyle => ({
    position: 'relative',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: `${pxToRem(1)}`,
    borderColor: 'transparent',
    borderRadius: `${pxToRem(2)}`,
    color: v.textColorDefault,
    cursor: 'pointer',
    display: p.vertical ? 'flex' : 'inline-flex',
    fontSize: v.textFontSize,
    padding: v.padding,

    ':hover': {
      color: v.textColorDefaultHoverFocus,

      [`& .${RadioGroupItem.slotClassNames.indicator}`]: {
        borderColor: v.textColorDefaultHoverFocus,

        ...(!p.disabled &&
          !p.checked && {
            borderColor: v.indicatorBorderColorDefaultHover
          })
      }
    },

    ':focus': {
      color: v.textColorDefaultHoverFocus
    },

    ...(p.checked && {
      ...restHoverFocusTextColor(v.textColorChecked)
    }),

    ...(p.disabled && {
      ...restHoverFocusTextColor(v.colorDisabled)
    }),

    ...getBorderFocusStyles({ variables: siteVariables })
  }),

  indicator: ({ props: p, variables: v }): ICSSInJSStyle => ({
    margin: `0 ${pxToRem(12)} 0 0`,
    borderRadius: '50%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: v.indicatorBorderColorDefault,
    width: pxToRem(12),
    height: pxToRem(12),

    ...(p.checked && {
      background: v.indicatorBackgroundColorChecked,
      borderColor: 'transparent'
    }),

    ...(p.disabled && {
      borderColor: v.colorDisabled,
      ...(p.checked && {
        background: v.colorDisabled
      })
    })
  })
};

export default radioStyles;
