import React, { useContext, useState } from 'react';
import { Theme } from '../common/styles';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextProps>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(ThemeContext);
}
