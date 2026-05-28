import { useEffect, useMemo, useState } from 'react';
import { ITEMS_PER_PAGE, TITLE_BY_TYPE } from '../pages/Home/constants/home.constants';
import { parseDeadline, normalizeDate } from '../pages/Home/utils/date';
import { getPaginationPages } from '../pages/Home/utils/pagination';

export const useHomeCatalog = (trips) => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('Все');
  const [sortBy, setSortBy] = useState('price-desc');
  const [dateFilter, setDateFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const processedTrips = useMemo(() => {
    const query = search.trim().toLowerCase();

    const result = trips.filter((trip) => {
      const matchType = typeFilter === 'Все' || trip.type === typeFilter;

      const title = trip.title?.toLowerCase() ?? '';
      const country = trip.country?.toLowerCase() ?? '';

      const matchSearch =
        title.includes(query) ||
        country.includes(query);

      const tripDate = parseDeadline(trip.deadline);

      let matchDate = true;

      if (dateFilter === 'soon') {
        const today = normalizeDate(new Date());
        const soonLimit = new Date(today);
        soonLimit.setDate(today.getDate() + 30);

        matchDate = tripDate ? tripDate >= today && tripDate <= soonLimit : false;
      }

      if (dateFilter === 'may-june') {
        matchDate = tripDate ? [4, 5].includes(tripDate.getMonth()) : false;
      }

      if (dateFilter === 'july-august') {
        matchDate = tripDate ? [6, 7].includes(tripDate.getMonth()) : false;
      }

      return matchType && matchSearch && matchDate;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'duration') {
      result.sort(
        (a, b) => (parseInt(b.duration, 10) || 0) - (parseInt(a.duration, 10) || 0)
      );
    }

    return result;
  }, [trips, search, typeFilter, sortBy, dateFilter]);

  const totalPages = Math.max(1, Math.ceil(processedTrips.length / ITEMS_PER_PAGE));

  const paginatedTrips = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return processedTrips.slice(start, start + ITEMS_PER_PAGE);
  }, [processedTrips, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, sortBy, dateFilter]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const dynamicTitle = TITLE_BY_TYPE[typeFilter] ?? TITLE_BY_TYPE['Все'];

  const paginationPages = useMemo(() => {
    return getPaginationPages(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSearch('');
    setTypeFilter('Все');
    setSortBy('price-desc');
    setDateFilter('all');
  };

  return {
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
  };
};