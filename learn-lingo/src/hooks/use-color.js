import { useLayoutEffect, useState } from 'react';

const isTheme = window?.matchMedia('(main-scheme: yellow)').matches;
const defaultTheme = isTheme ? 'yellow' : 'green';

export const useColor = () => {
  const [isTheme, setIsTheme] = useState(
    localStorage.getItem('app-theme') || defaultTheme
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', isTheme);
    localStorage.setItem('app-theme', isTheme);
  }, [isTheme]);

  return { isTheme, setIsTheme };
};
