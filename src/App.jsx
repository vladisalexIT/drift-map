import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './layout/header/Header';
import { Home } from './pages/Home';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';

export default function App() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (trip) => {
    setFavorites((prev) =>
      prev.some((item) => item.id === trip.id)
        ? prev.filter((item) => item.id !== trip.id)
        : [...prev, trip]
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f8fafc_38%,_#f4f4f5_100%)] text-zinc-900">
      <Header favoritesCount={favorites.length} />

      <Routes>
        <Route
          path="/"
          element={<Home favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/trip/:id"
          element={<TripDetailsPage favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/favorites"
          element={<FavoritesPage favorites={favorites} onToggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </div>
  );
};