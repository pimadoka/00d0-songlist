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
    primary: '#EE6867',
    bg: {
      primary: '#F3F3F3',
      secondary: '#FFFFFF',
    },
    fg: {
      primary: '#222222',
      secondary: '#444444',
      low: '#666666',
    },
    border: {
      level1: '#F4F4F4',
    },
  };

  export const Shadows = {
    common: '0px 4px 8px rgba(180, 180, 180, 0.25)',
  };

  export const ZIndex = {
    header: 10,
    scrollToTop: 11,
    content: 1,
    songlistContent: 2,
  };
}