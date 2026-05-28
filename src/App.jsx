import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './layout/header/Header';
import { Home } from './pages/Home/Home';
import { TripDetailsPage } from './pages/TripDetailsPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { NotFound } from './pages/NotFound';
import { useFavorites } from './context/FavoritesContext';

export default function App() {


  const { favorites, toggleFavorite, clearFavorites } = useFavorites();

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
          element={
            <FavoritesPage
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onClearFavorites={clearFavorites}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};