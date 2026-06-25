import React, { useState } from 'react';
import { AppContext } from './AppContext.tsx';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(c => c + 1);

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
};