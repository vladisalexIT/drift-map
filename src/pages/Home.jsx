import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Search,
  Sparkles,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Plane,
  Route,
  Compass,
  Clock3,
  Heart,
  ShieldCheck,
  BadgePercent,
  Headphones,
  WalletCards,
  CreditCard,
  Star
} from 'lucide-react';
import { SiInstagram, SiFacebook, SiYoutube, SiTelegram } from 'react-icons/si';
import { TripCard } from '../components/TripCard';
import { Link } from 'react-router-dom';
import Hero from '../assets/hero.jpg';
import BackgroundDecorations from '../components/BackgroundDecorations';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const HeroTripCard = ({ trip, isFavorite, onToggleFavorite }) => {
  return (
    <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_50px_-18px_rgba(0,0,0,0.45)]">
      <Link
        to={`/trip/${trip.id}`}
        className="group relative block aspect-[4/5] w-full overflow-hidden"
      >
        <img
          src={`${import.meta.env.BASE_URL}${trip.image}`}
          alt={trip.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
          {trip.deadline || 'Популярный тур'}
        </div>

        <div className="absolute left-4 top-[52px] flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-sm font-bold text-zinc-900 shadow-sm backdrop-blur-md">
          <Star size={15} className="fill-orange-400 text-orange-400" />
          {trip.rating}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleFavorite(trip);
          }}
          className={`absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full transition-all duration-300 backdrop-blur-md ${isFavorite
            ? 'bg-red-500 text-white shadow-lg'
            : 'bg-white/90 text-zinc-900 hover:bg-white hover:scale-110'
            }`}
        >
          <Heart
            size={20}
            className={isFavorite ? 'fill-current' : 'text-zinc-900'}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white/85">
            <MapPin size={15} />
            <span className="font-medium uppercase tracking-wider">{trip.country}</span>
            {trip.type ? (
              <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs font-bold uppercase tracking-wider">
                {trip.type}
              </span>
            ) : null}
          </div>

          <h4 className="text-2xl font-bold leading-tight tracking-tight">
            {trip.title}
          </h4>

          {trip.shortDescription ? (
            <p className="mt-2 line-clamp-2 text-base leading-relaxed text-white/80">
              {trip.shortDescription}
            </p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/40 bg-white/30 backdrop-blur-sm">
      <div className="absolute inset-0">
        <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-sky-200/25 blur-3xl" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.78),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.42),transparent_30%)]" />
        <svg
          className="absolute inset-x-0 bottom-0 h-24 w-full opacity-[0.1]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C150,110 300,20 450,64 C600,108 750,18 900,64 C1050,110 1150,34 1200,64 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-sky-950"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="group flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white shadow-lg shadow-zinc-200 transition group-hover:scale-105">
                ✈
              </div>
              <div className="hidden sm:block">
                <p className="text-[12px] uppercase tracking-[0.28em] text-zinc-400 leading-tight font-semibold">
                  DriftMap
                </p>
                <h1 className="text-base font-semibold text-zinc-900">
                  Планировщик путешествий
                </h1>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-6 text-zinc-600">
              Подбирайте направления, сравнивайте туры и сохраняйте вдохновляющие
              варианты в избранное. Все маршруты проверены экспертами.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
              Навигация
            </h4>
            <div className="space-y-3 text-sm text-zinc-600">
              <Link to="/" className="block transition hover:text-zinc-900">Главная</Link>
              <Link to="/favorites" className="block transition hover:text-zinc-900">Избранное</Link>
              <Link to="/about" className="block transition hover:text-zinc-900">О сервисе</Link>
              <Link to="/contacts" className="block transition hover:text-zinc-900">Контакты</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-zinc-900">
              Следите за нами
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Instagram"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Facebook"
              >
                <SiFacebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-zinc-700 shadow-sm ring-1 ring-zinc-200 transition hover:bg-white hover:text-zinc-900"
                aria-label="Youtube"
              >
                <SiYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200/70 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} DriftMap. Все права защищены.</span>
          <span>Собрано для комфортного выбора путешествий.</span>
        </div>
      </div>
    </footer>
  );
};

const monthMap = {
  января: 0,
  февраля: 1,
  марта: 2,
  апреля: 3,
  мая: 4,
  июня: 5,
  июля: 6,
  августа: 7,
  сентября: 8,
  октября: 9,
  ноября: 10,
  декабря: 11,
};

const normalizeDate = (date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

const parseDeadline = (deadline) => {
  if (!deadline || typeof deadline !== 'string') return null;

  const parts = deadline.trim().toLowerCase().split(' ');
  if (parts.length < 2) return null;

  const day = parseInt(parts[0], 10);
  const month = monthMap[parts[1]];

  if (Number.isNaN(day) || month === undefined) return null;

  const date = new Date(new Date().getFullYear(), month, day);
  date.setHours(0, 0, 0, 0);
  return date;
};


export const Home = ({ favorites = [], onToggleFavorite }) => {

  const [trips, setTrips] = useState([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('Все');
  const [sortBy, setSortBy] = useState('price-desc');
  const [dateFilter, setDateFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroSwiperRef = useRef(null);

  useEffect(() => {
    const loadTrips = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${import.meta.env.BASE_URL}mock/data.json`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setTrips(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadTrips();
  }, []);

  const processedTrips = useMemo(() => {
    let result = trips.filter((trip) => {
      const matchType = typeFilter === 'Все' || trip.type === typeFilter;
      const query = search.toLowerCase();

      const matchSearch =
        trip.title.toLowerCase().includes(query) ||
        trip.country.toLowerCase().includes(query);

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

    if (sortBy === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'duration') result.sort((a, b) => parseInt(b.duration) - parseInt(a.duration));

    return result;
  }, [trips, search, typeFilter, sortBy, dateFilter]);

  const types = ['Все', 'Пляжный', 'Городской', 'Природный', 'Активный', 'Wellness'];

  const dynamicTitle = useMemo(() => {
    if (typeFilter === 'Все') return 'Популярные направления';
    if (typeFilter === 'Пляжный') return 'Пляжные направления';
    if (typeFilter === 'Городской') return 'Городские направления';
    if (typeFilter === 'Природный') return 'Природные направления';
    if (typeFilter === 'Активный') return 'Активные направления';
    if (typeFilter === 'Wellness') return 'Оздоровительные направления';
    return 'Популярные направления';
  }, [typeFilter]);

  const itemsPerPage = 9;
  const totalPages = Math.max(1, Math.ceil(processedTrips.length / itemsPerPage));

  const paginatedTrips = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return processedTrips.slice(start, start + itemsPerPage);
  }, [processedTrips, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, typeFilter, dateFilter, sortBy]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const paginationPages = useMemo(() => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push('dots-left');

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('dots-right');

    pages.push(totalPages);

    return [...new Set(pages)];
  }, [currentPage, totalPages]);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const perks = [
    {
      id: 1,
      title: 'Скидки до 15% на впечатления',
      description:
        'Подбираем специальные предложения на экскурсии, активности и отдых в популярных направлениях.',
      buttonText: 'Подробнее',
      icon: BadgePercent,
      accent: 'from-orange-500 via-orange-500 to-rose-500',
      glow: 'bg-orange-300/30',
    },
    {
      id: 2,
      title: 'Проверенные маршруты и туры',
      description:
        'Только понятные направления, удобная логистика и варианты отдыха, которые легко сравнить между собой.',
      buttonText: 'Смотреть',
      icon: ShieldCheck,
      accent: 'from-sky-500 via-cyan-500 to-blue-500',
      glow: 'bg-sky-300/30',
    },
    {
      id: 3,
      title: 'Поддержка на каждом этапе поездки',
      description:
        'От выбора направления до финального бронирования — всё в одном удобном сценарии.',
      buttonText: 'Узнать',
      icon: Headphones,
      accent: 'from-emerald-500 via-teal-500 to-cyan-500',
      glow: 'bg-emerald-300/30',
    },
    {
      id: 4,
      title: 'Удобное сравнение цен и форматов',
      description:
        'Сохраняйте варианты, сравнивайте детали поездки и выбирайте лучшее предложение без лишней суеты.',
      buttonText: 'Открыть',
      icon: WalletCards,
      accent: 'from-violet-500 via-fuchsia-500 to-pink-500',
      glow: 'bg-fuchsia-300/30',
    },
  ];


  const steps = [
    {
      title: 'Умный поиск и фильтры',
      text: 'Найдите идеальный тур среди 150+ предложений, используя фильтры по бюджету, датам и типу отдыха.',
      icon: Compass,
    },
    {
      title: 'Мгновенное бронирование',
      text: 'Оформляйте поездку онлайн за 5 минут: данные вводятся один раз и хранятся в защищенном профиле.',
      icon: CreditCard,
    },
    {
      title: 'Поддержка и документы',
      text: 'Получайте билеты и ваучеры в личный кабинет. Мы на связи 24/7 до самого конца вашего отпуска.',
      icon: ShieldCheck,
    },
  ];

  useEffect(() => {
    if (heroLoaded) sessionStorage.setItem('heroLoaded', '1');
  }, [heroLoaded]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#eaf4fb] text-zinc-900">
      <BackgroundDecorations />

      <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-zinc-800 sm:h-[50vh] sm:min-h-[400px] lg:h-[65vh] lg:min-h-[480px]">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${heroLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          style={{
            background: 'linear-gradient(to bottom, #87aade 0%, #d4bc96 100%)',
            filter: 'blur(20px)',
            transform: 'scale(1.1)',
          }}
        />

        <picture className="absolute inset-0 block h-full w-full">
          <source
            media="(max-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}hero-mobile.avif`}
            type="image/avif"
          />
          <source srcSet={`${import.meta.env.BASE_URL}hero.avif`} type="image/avif" />
          <source srcSet={`${import.meta.env.BASE_URL}hero.webp`} type="image/webp" />
          <img
            src={`${import.meta.env.BASE_URL}hero.jpg`}
            alt="Хофбург, Вена"
            className={`block h-full w-full object-cover transition-opacity duration-500 ${heroLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            onLoad={() => setHeroLoaded(true)}
          />
        </picture>

        <div className="absolute inset-0 bg-zinc-900/40" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_360px] lg:items-center">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md ring-1 ring-white/20">
                <Sparkles size={12} className="text-yellow-400" />
                DriftMap Experience
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Путешествуйте по лучшим местам с DriftMap
              </h1>

              <p className="mt-5 text-base text-white/90 sm:text-lg">
                Подбирайте туры по странам, настроению и формату отдыха.
              </p>
            </div>

            <div className="relative hidden min-h-[420px] lg:block lg:-translate-y-6">
              <div className="relative">
                <div className="rounded-[28px] bg-white/10 p-3 backdrop-blur-xl ring-1 ring-white/20">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    loop
                    autoplay={{
                      delay: 6200,
                      disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => {
                      heroSwiperRef.current = swiper;
                    }}
                  >
                    {trips.slice(0, 3).map((trip) => (
                      <SwiperSlide key={trip.id}>
                        <HeroTripCard
                          trip={trip}
                          isFavorite={favorites.some((item) => item.id === trip.id)}
                          onToggleFavorite={onToggleFavorite}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="absolute -bottom-12 left-[-46px] z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => heroSwiperRef.current?.slidePrev()}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-zinc-900 shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/80 transition-none hover:bg-white hover:text-zinc-900 hover:shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)]"
                    aria-label="Предыдущий слайд"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => heroSwiperRef.current?.slideNext()}
                    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-zinc-900 shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/80 transition-none hover:bg-white hover:text-zinc-900 hover:shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)]"
                    aria-label="Следующий слайд"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-12 mb-12 rounded-[32px] border border-white/60 bg-white/78 p-2 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
            <div className="relative flex-[1.35]">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Куда отправимся?"
                className="w-full rounded-[24px] bg-transparent py-3 pl-13 pr-4 text-base font-medium outline-none placeholder:text-zinc-400 sm:py-4 sm:pl-14 sm:pr-5 lg:py-6 lg:pl-16 lg:pr-6 lg:text-lg"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 border-t border-zinc-100 p-0 lg:border-l lg:border-t-0 lg:p-4">
              <div className="mr-2 hidden items-center gap-2 px-2 text-zinc-400 lg:flex">
                <MapPin size={16} />
                <span className="text-xs font-semibold uppercase tracking-wider">Тип:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeFilter(type)}
                    className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,color,shadow] duration-200 ${typeFilter === type
                      ? 'bg-zinc-900 text-white shadow-lg shadow-slate-200'
                      : 'text-zinc-500 hover:bg-sky-50 hover:text-zinc-900'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">{dynamicTitle}</h2>
            <p className="mt-1 text-sm text-zinc-500">
              Найдено {processedTrips.length} вариантов для вашего отдыха
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-2xl bg-white/50 p-1 shadow-sm ring-1 ring-zinc-200">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent px-3 py-1.5 text-sm font-bold text-zinc-600 outline-none cursor-pointer"
              >
                <option value="price-asc">Сначала дешевле</option>
                <option value="price-desc">Сначала дороже</option>
                <option value="duration">Дольше по времени</option>
              </select>
            </div>

            <div className="flex items-center rounded-2xl bg-white/50 p-1 shadow-sm ring-1 ring-zinc-200">
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-transparent px-3 py-1.5 text-sm font-bold text-zinc-600 outline-none cursor-pointer"
              >
                <option value="all">Все даты</option>
                <option value="soon">Ближайшие</option>
                <option value="may-june">Май — Июнь</option>
                <option value="july-august">Июль — Август</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center rounded-3xl border border-white/60 bg-white/70 backdrop-blur-sm">
            <span className="animate-pulse font-medium text-zinc-400">Поиск лучших предложений...</span>
          </div>
        ) : error ? (
          <div className="rounded-3xl bg-red-50 p-12 text-center text-red-600">
            Произошла ошибка при загрузке данных.
          </div>
        ) : (
          <>
            {processedTrips.length > 0 ? (
              <>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {paginatedTrips.map((trip) => (
                    <TripCard
                      key={trip.id}
                      trip={trip}
                      isFavorite={favorites.some((item) => item.id === trip.id)}
                      onToggleFavorite={onToggleFavorite}
                    />
                  ))}
                </div>

                <div className="mt-12 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => goToPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Предыдущая страница"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center gap-2">
                      {paginationPages.map((page, index) =>
                        typeof page === 'number' ? (
                          <button
                            key={page}
                            type="button"
                            onClick={() => goToPage(page)}
                            className={`min-w-11 h-11 rounded-full px-4 text-sm font-semibold transition cursor-pointer ${currentPage === page
                              ? 'bg-zinc-900 text-white shadow-lg shadow-zinc-200'
                              : 'bg-white/90 text-zinc-700 ring-1 ring-zinc-200 hover:bg-sky-50'
                              }`}
                          >
                            {page}
                          </button>
                        ) : (
                          <span key={`${page}-${index}`} className="px-1 text-zinc-400">
                            …
                          </span>
                        )
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className="cursor-pointer flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-sm ring-1 ring-zinc-200 transition hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-40"
                      aria-label="Следующая страница"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                  <div className="text-sm text-zinc-500">
                    Страница {currentPage} из {totalPages}
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-[40px] border border-white/60 bg-white/80 py-24 text-center shadow-sm ring-1 ring-white/40 backdrop-blur-sm">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-zinc-50 p-3 text-zinc-400">
                  <Search className="h-full w-full" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">Ничего не найдено</h3>
                <p className="mt-2 text-zinc-500">Попробуйте изменить запрос или сбросить фильтры</p>
                <button
                  onClick={() => {
                    setSearch('');
                    setTypeFilter('Все');
                  }}
                  className="mt-6 text-sm font-bold text-zinc-900 underline underline-offset-4"
                >
                  Сбросить всё
                </button>
              </div>
            )}
          </>
        )}

        <div className="mt-20 rounded-[36px] border border-white/60 bg-white/75 p-6 shadow-[0_30px_70px_-24px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
              Как это работает
            </p>
            <h3 className="mt-2 text-2xl font-bold text-zinc-900">
              Три шага до идеального путешествия
            </h3>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[28px] bg-zinc-50 p-5 ring-1 ring-zinc-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-zinc-900 text-white">
                      <Icon size={20} />
                    </div>
                    <div className="text-sm font-semibold text-zinc-400">
                      Шаг {index + 1}
                    </div>
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-zinc-900">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <div className="overflow-hidden rounded-[36px] cursor-pointer">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={16}
              loop
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            >
              {perks.map((item) => {
                const Icon = item.icon;

                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className={`relative overflow-hidden rounded-[30px] bg-gradient-to-r ${item.accent} min-h-[260px] px-6 py-8 text-white sm:px-10 sm:py-10 lg:min-h-[300px] lg:px-14`}
                    >
                      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${item.glow}`} />
                      <div className="absolute bottom-0 right-0 translate-x-[12%] translate-y-[8%] opacity-15">
                        <Icon size={220} strokeWidth={1.2} />
                      </div>

                      <div className="relative z-10 flex h-full max-w-xl flex-col justify-between">
                        <div>
                          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/16 backdrop-blur-md ring-1 ring-white/25">
                            <Icon size={26} />
                          </div>

                          <h3 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
                            {item.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                            {item.description}
                          </p>
                        </div>

                        <div className="mt-8">
                          <button
                            type="button"
                            className="rounded-2xl bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/30 transition hover:bg-white/30"
                          >
                            {item.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};