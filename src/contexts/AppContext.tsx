import React, { createContext, useContext, useState } from 'react';

interface AppContextType {
  count: number;
  increment: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <AppContext.Provider value={{ count, increment }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};