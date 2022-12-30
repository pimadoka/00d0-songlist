import React, { useContext, useEffect, useState } from 'react';
import { CommonStyles, Theme } from '@/common/styles';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
});

const ThemeLocalStorageKey = 'theme';

const getSystemThemeMedia = () => window.matchMedia("(prefers-color-scheme: light)");

const getSystemTheme = (): Theme => {
  const themeMedia = getSystemThemeMedia();
  return themeMedia.matches ? 'light' : 'dark';
}
  
const getDefaultTheme = (): Theme => {
  const savedTheme = localStorage.getItem(ThemeLocalStorageKey);
  return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : getSystemTheme();
}

const changeRootThemeStyle = (theme: Theme) => {
  const rootElement = document.documentElement;
  rootElement.style.background = CommonStyles.Colors[theme].bg.secondary;
  rootElement.style.color = CommonStyles.Colors[theme].fg.primary;
}

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getDefaultTheme());

  useEffect(() => {
    localStorage.setItem(ThemeLocalStorageKey, theme);
    changeRootThemeStyle(theme);
  }, [theme]);
  
  const onSystemThemeChange = (e: MediaQueryListEvent) => {
    const systemTheme = e.matches ? 'light' : 'dark';
    setTheme(systemTheme);
  }

  useEffect(() => {
    const themeMedia = getSystemThemeMedia();
    themeMedia.addEventListener('change', onSystemThemeChange);
    return () => {
      themeMedia.removeEventListener('change', onSystemThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
