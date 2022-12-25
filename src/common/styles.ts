import { transparentize } from "polished";

export type Theme = 'light' | 'dark';

export namespace CommonStyles {
  export const ContentWidth = 1280;

  export const ScreenBreakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  };

  export const Colors = {
    light: {
      primary: '#EE6867',
      bg: {
        primary: '#F3F3F3',
        secondary: '#FFFFFF',
      },
      fg: {
        primary: '#222222',
        secondary: '#444444',
        low: '#666666',
        reverse: '#FFFFFF',
      },
      border: {
        level1: '#F4F4F4',
      },
    },
    dark: {
      primary: '#EE6867',
      bg: {
        primary: '#3a3b3c',
        secondary: '#2E2E2E',
      },
      fg: {
        primary: '#EEEEEE',
        secondary: '#CCCCCC',
        low: '#AAAAAA',
        reverse: '#FFFFFF',
      },
      border: {
        level1: '#535353',
      },
    },
  };

  export const Shadows = {
    light: {
      common: `0px 4px 8px ${transparentize(0.75, '#B4B4B4')}`
    },
    dark: {
      common: `0px 4px 8px ${transparentize(0.75, '#000000')}`
    },
  };

  export const ZIndex = {
    header: 10,
    scrollToTop: 11,
    content: 1,
    songlistContent: 2,
  };
}