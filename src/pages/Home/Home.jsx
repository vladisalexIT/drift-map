import { useMemo } from 'react';
import BackgroundDecorations from '../../components/BackgroundDecorations';
import Footer from '../../layout/footer/Footer';
import { TRIP_TYPES } from './constants/home.constants';
import { useTrips } from '../../hooks/useTrips';
import { useHomeCatalog } from '../../hooks/useHomeCatalog';
import HeroSection from './components/HeroSection';
import TripsFiltersBar from './components/TripsFiltersBar';
import CatalogHeader from './components/CatalogHeader';
import TripsContent from './components/TripsContent';
import HowItWorksSection from './components/HowItWorksSection';
import PerksSection from './components/PerksSection';

export const Home = ({ favorites = [], onToggleFavorite }) => {
  const { trips, loading, error } = useTrips();

  const {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    sortBy,
    setSortBy,
    dateFilter,
    setDateFilter,
    processedTrips,
    paginatedTrips,
    currentPage,
    totalPages,
    paginationPages,
    dynamicTitle,
    goToPage,
    resetFilters,
  } = useHomeCatalog(trips);

  const favoriteIds = useMemo(() => {
    return new Set(favorites.map((item) => item.id));
  }, [favorites]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eaf4fb] text-zinc-900">
      <BackgroundDecorations />

      <HeroSection
        trips={trips}
        favoriteIds={favoriteIds}
        onToggleFavorite={onToggleFavorite}
      />

      <section className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <TripsFiltersBar
          search={search}
          onSearchChange={setSearch}
          types={TRIP_TYPES}
          selectedType={typeFilter}
          onTypeChange={setTypeFilter}
        />

        <CatalogHeader
          title={dynamicTitle}
          total={processedTrips.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
          dateFilter={dateFilter}
          onDateFilterChange={setDateFilter}
        />

        <TripsContent
          loading={loading}
          error={error}
          trips={paginatedTrips}
          favoriteIds={favoriteIds}
          onToggleFavorite={onToggleFavorite}
          currentPage={currentPage}
          totalPages={totalPages}
          paginationPages={paginationPages}
          onPageChange={goToPage}
          onResetFilters={resetFilters}
        />

        <HowItWorksSection />
        <PerksSection />
      </section>

      <Footer />
    </main>
  );
};