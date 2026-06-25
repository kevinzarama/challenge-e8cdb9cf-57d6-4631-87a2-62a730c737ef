import { createContext } from 'react';

export interface CountReader {
  count: number;
}

export interface CountWriter {
  increment: () => void;
}

export type AppContextType = CountReader & CountWriter;

export const AppContext = createContext<AppContextType | undefined>(undefined);