import { ComponentSlotStylesPrepared, ICSSInJSStyle } from '@fluentui/styles';
import { MenuVariables } from '../../../teams/components/Menu/menuVariables';
import { default as MenuItem, MenuItemProps, MenuItemState } from '../../../../components/Menu/MenuItem';
import submenuIndicatorUrl from '../../../teams/components/Menu/submenuIndicatorUrl';

type MenuItemPropsAndState = MenuItemProps & MenuItemState;

const menuItemStyles: ComponentSlotStylesPrepared<MenuItemPropsAndState, MenuVariables> = {
  wrapper: ({ props: p, variables: v }): ICSSInJSStyle => {
    const { iconOnly, isFromKeyboard, vertical, active, underlined, primary } = p;

    return {
      ':hover': {
        color: v.colorActive,
        ...(!active && {
          ...(primary && !underlined && { color: v.colorActive }),
          background: v.backgroundColorFocus
        }),
        [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
          backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
        }
      },

      ...(active &&
        !underlined && {
          background: v.backgroundColorActive,
          color: v.colorActive,
          [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
            backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
          }
        }),

      ...((iconOnly || vertical) && {
        ...(isFromKeyboard && {
          color: v.colorActive,
          background: v.backgroundColorFocus,
          [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
            backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
          }
        }),

        ...(active && {
          color: v.colorActive,
          background: v.backgroundColorActive,
          [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
            backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
          }
        }),

        ':hover': {
          color: v.colorActive,
          background: v.backgroundColorFocus,
          [`&>.${MenuItem.className}>.${MenuItem.slotClassNames.indicator}`]: {
            backgroundImage: submenuIndicatorUrl(v.colorActive, p.vertical)
          }
        }
      }),

      ...(underlined && {
        ...(active && {
          color: v.color
        }),
        ':hover': {
          color: v.color
        },
        ...(isFromKeyboard && {
          color: v.colorActive
        })
      })
    };
  }
};

export default menuItemStyles;
