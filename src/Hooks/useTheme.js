import { useState } from 'react';

const useTheme = (initialTheme = 'light') => {
  const [theme, setTheme] = useState(initialTheme);

  const handleChange = () =>
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'));

  return [theme, handleChange];
};

export default useTheme;
