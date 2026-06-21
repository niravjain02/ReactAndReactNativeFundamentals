import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { User } from '../models/User';
import { loadFavorites, saveFavorites } from '../storage/favoritesStorage';

interface FavoritesContextValue {
  favorites: User[];
  isFavorite: (userId: number) => boolean;
  toggleFavorite: (user: User) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<User[]>([]);

  useEffect(() => {
    loadFavorites().then(setFavorites);
  }, []);

  const toggleFavorite = useCallback((user: User) => {
    setFavorites((current) => {
      const alreadySaved = current.some((f) => f.id === user.id);
      const updated = alreadySaved
        ? current.filter((f) => f.id !== user.id)
        : [...current, user];
      saveFavorites(updated);
      return updated;
    });
  }, []);

  const favoriteIdSet = useMemo(() => new Set(favorites.map((f) => f.id)), [favorites]);
  const isFavorite = useCallback((userId: number) => favoriteIdSet.has(userId), [favoriteIdSet]);

  const value = useMemo(
    () => ({ favorites, isFavorite, toggleFavorite }),
    [favorites, isFavorite, toggleFavorite],
  );

  return React.createElement(FavoritesContext.Provider, { value }, children);
}

export function useFavorites(): FavoritesContextValue {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error('useFavorites must be called inside FavoritesProvider');
  }
  return ctx;
}
