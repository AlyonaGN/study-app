'use client';

import { createContext, useState } from 'react';
import { SortMode } from './ui/components/types';

export interface SortContextInterface {
  sortMode: SortMode;
  setSortMode: (sortMode: SortMode) => void;
}

export const SortContext = createContext<SortContextInterface | null>(null);

export default function SortProvider({ children }: { children: React.ReactNode }) {
  const [sortMode, setSortMode] = useState(SortMode.ByDate);
  const value = { sortMode, setSortMode };
  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
}
