import React, { createContext, useContext, useState } from 'react';

type SearchHistoryItem = {
  id: string;
  search_details: string;
};

interface SearchHistoryContextType {
  addSearchTerm: (term: string) => void;
  updateSearchTerm: (id: string, newTerm: string) => void;
  deleteSearchTerm: (id: string) => void;
  clearAll: () => void;
  getSearchHistory: () => SearchHistoryItem[];
}

const SearchHistoryContext = createContext<SearchHistoryContextType | undefined>(undefined);

const STORAGE_KEY = 'search_history';

const generateRandomId = (length: number = 8): string => {
  return Math.random().toString(36).substring(2, 2 + length);
};

export const SearchHistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchHistory, setSearchHistory] = useState<SearchHistoryItem[]>([]);

  const syncToStorage = (data: SearchHistoryItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setSearchHistory(data);
  };

  const getSearchHistory = (): SearchHistoryItem[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const parsed: SearchHistoryItem[] = stored ? JSON.parse(stored) : [];
      setSearchHistory(parsed);
      return parsed;
    } catch (error) {
      console.error('Error getting search history:', error);
      return [];
    }
  };

  const addSearchTerm = (term: string) => {
    const newEntry: SearchHistoryItem = {
      id: generateRandomId(),
      search_details: term,
    };
    const updated = [newEntry, ...getSearchHistory()];
    syncToStorage(updated);
  };

  const updateSearchTerm = (id: string, newTerm: string) => {
    const updated = getSearchHistory().map((item) =>
      item.id === id ? { ...item, search_details: newTerm } : item
    );
    syncToStorage(updated);
  };

  const deleteSearchTerm = (id: string) => {
    const updated = getSearchHistory().filter((item) => item.id !== id);
    syncToStorage(updated);
  };

  const clearAll = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSearchHistory([]);
  };

  return (
    <SearchHistoryContext.Provider
      value={{ addSearchTerm, updateSearchTerm, deleteSearchTerm, clearAll, getSearchHistory }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
};

export const useSearchHistory = () => {
  const context = useContext(SearchHistoryContext);
  return context;
};
