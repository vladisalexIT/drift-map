import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('drift_favs');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('drift_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (trip) => {
    setFavorites(prev => 
      prev.some(item => item.id === trip.id)
        ? prev.filter(item => item.id !== trip.id)
        : [...prev, trip]
    );
  };

  const isFavorite = (id) => favorites.some(item => item.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);