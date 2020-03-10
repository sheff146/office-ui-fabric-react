import { RadioGroupItemVariables } from '../../../teams/components/RadioGroup/radioGroupItemVariables';

export default (siteVars: any): Partial<RadioGroupItemVariables> => ({
  colorDisabled: siteVars.accessibleGreen,

  textColorDefault: siteVars.colors.white,
  textColorDefaultHoverFocus: siteVars.colors.white,
  textColorChecked: siteVars.colors.white,

  indicatorBorderColorDefault: siteVars.colors.white,
  indicatorBorderColorDefaultHover: siteVars.accessibleCyan,
  indicatorBorderColorChecked: siteVars.accessibleCyan,

  indicatorBackgroundColorChecked: siteVars.accessibleCyan
});
