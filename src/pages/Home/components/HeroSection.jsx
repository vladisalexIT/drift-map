import { useRef, useState } from 'react';
import { ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import HeroTripCard from './HeroTripCard';

const HeroSection = ({ trips, favoriteIds, onToggleFavorite }) => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroSwiperRef = useRef(null);

  return (
    <section className="relative h-[40vh] min-h-[320px] w-full overflow-hidden bg-zinc-800 sm:h-[50vh] sm:min-h-[400px] lg:h-[65vh] lg:min-h-[480px]">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          heroLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(to bottom, #87aade 0%, #d4bc96 100%)',
          filter: 'blur(20px)',
          transform: 'scale(1.1)',
        }}
      />

      <picture className="absolute inset-0 block h-full w-full">
        <source srcSet={`${import.meta.env.BASE_URL}hero.avif`} type="image/avif" />
        <source srcSet={`${import.meta.env.BASE_URL}hero.webp`} type="image/webp" />
        <img
          src={`${import.meta.env.BASE_URL}hero.jpg`}
          alt="Хофбург, Вена"
          className={`block h-full w-full object-cover transition-opacity duration-500 ${
            heroLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          onLoad={() => setHeroLoaded(true)}
        />
      </picture>

      <div className="absolute inset-0 bg-zinc-900/40" />

      <div className="relative mx-auto flex h-full max-w-[2000px] items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full gap-8 lg:grid-cols-[1.1fr_400px] lg:items-center">
          <div className="max-w-3xl">
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

          <div className="relative hidden min-h-[440px] lg:block lg:-translate-y-6 lg:-translate-x-14">
            <div className="relative flex items-center">
              <div className="relative w-[380px]">
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
                          isFavorite={favoriteIds.has(trip.id)}
                          onToggleFavorite={onToggleFavorite}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="ml-4 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => heroSwiperRef.current?.slidePrev()}
                  className="flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-white text-zinc-900 shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/80"
                  aria-label="Предыдущий слайд"
                >
                  <ChevronUp size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => heroSwiperRef.current?.slideNext()}
                  className="flex h-12 w-12 items-center justify-center rounded-full cursor-pointer bg-white text-zinc-900 shadow-[0_18px_35px_-16px_rgba(0,0,0,0.45)] ring-1 ring-white/80"
                  aria-label="Следующий слайд"
                >
                  <ChevronDown size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;