import {fontSize, spacing} from '../theme/dimensions';
import {LeagueSpartan, Poppins} from '../theme/fontFamily';

export const TextVariants = {
  title: {
    fontFamily: Poppins.semibold,
    fontSize: fontSize.title,
  },
  subtext: {
    fontFamily: LeagueSpartan.regular,
    fontSize: fontSize.subtext,
  },
  subtitle: {
    fontFamily: Poppins.medium,
    fontSize: fontSize.subtitle,
  },
  paragraph: {
    fontFamily: LeagueSpartan.light,
    fontSize: fontSize.paragraph,
    lineHeight: spacing.md,
  },
};

export type TextPresets = keyof typeof TextVariants;
