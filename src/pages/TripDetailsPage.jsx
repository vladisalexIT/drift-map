import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import {
  Heart,
  MapPin,
  Star,
  Clock3,
  Users,
  CalendarDays,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Camera,
  Hotel,
  UtensilsCrossed,
  Compass,
  ChevronRight,
  Quote,
  Info,
  ChevronLeft,
  CheckCircle2,
  Download
} from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TripDetailsPage = ({ favorites = [], onToggleFavorite }) => {
  const { id } = useParams();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}mock/data.json`)
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const trip = useMemo(() => trips.find((item) => String(item.id) === id), [trips, id]);
  const isFavorite = favorites.some((item) => item.id === trip?.id);

  const gallery = trip ? [trip.image, trip.image, trip.image, trip.image] : [];

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-500 border-t-transparent" />
      </div>
    );
  }

  if (!trip) {
    return <div className="text-center p-20 font-bold">Тур не найден</div>;
  }

  const detailedDescription = `
    Вас ждёт уникальное погружение в атмосферу локации. ${trip.description}
    Мы разработали этот маршрут так, чтобы вы могли прочувствовать настоящий ритм жизни региона,
    избегая туристических толп. В программе собраны только проверенные места: от уютных
    локальных кафе до панорамных точек для лучших фотографий.
    Позвольте себе забыть о логистике и просто наслаждаться моментом.
  `;

  const highlights = [
    {
      icon: <Compass size={20} />,
      title: 'Авторский маршрут',
      desc: 'Интересные точки без банальных остановок',
      accent: 'Продуманный план'
    },
    {
      icon: <Camera size={20} />,
      title: 'Фото-локации',
      desc: 'Красивые виды и лучшие места для снимков',
      accent: 'Лучшие ракурсы'
    },
    {
      icon: <UtensilsCrossed size={20} />,
      title: 'Гастро-опыт',
      desc: 'Локальная кухня и атмосферные места',
      accent: 'Проверенные места'
    },
    {
      icon: <Hotel size={20} />,
      title: 'Комфорт',
      desc: 'Удобное проживание и спокойный темп',
      accent: 'Без суеты'
    }
  ];

  const faqs = [
    {
      id: 'included',
      title: 'Что включено в стоимость?',
      content:
        'Трансферы по всему маршруту, проживание в двухместных номерах, завтраки, услуги гида-организатора и все входные билеты по программе.'
    },
    {
      id: 'support',
      title: 'Как проходит подготовка?',
      content:
        'После бронирования мы добавим вас в закрытый чат, пришлем подробный чек-лист по вещам и поможем с выбором авиабилетов.'
    },
    {
      id: 'payment',
      title: 'Можно ли оплатить частями?',
      content:
        'Да, обычно доступна предоплата для фиксации места, а остаток можно внести ближе к старту путешествия.'
    }
  ];

  const reviews = [
    {
      name: 'Анна',
      city: 'Москва',
      avatar: 'А',
      rating: 5,
      text: 'Это была одна из самых красивых поездок в моей жизни. Всё очень стильно организовано, без перегруза и суеты. Особенно понравились локации и атмосфера внутри группы.'
    },
    {
      name: 'Илья',
      city: 'Санкт-Петербург',
      avatar: 'И',
      rating: 5,
      text: 'Очень сильный маршрут: красивые места, хорошие отели и реально удобная логистика. Было ощущение, что за нас уже всё продумали.'
    },
    {
      name: 'Мария',
      city: 'Казань',
      avatar: 'М',
      rating: 5,
      text: 'Поехала одна и вообще ни разу не пожалела. Быстро влилась в компанию, программа насыщенная, но комфортная. Фотографий привезла просто море.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFC]">
      <nav className="sticky top-0 z-[100] border-b border-zinc-100 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 h-20">
          <Link to="/" className="flex items-center gap-3 text-sm font-bold text-zinc-900 group">
            <div className="p-2 rounded-full bg-zinc-100 group-hover:bg-orange-500 group-hover:text-white transition-all">
              <ArrowLeft size={18} />
            </div>
            <span>Ко всем направлениям</span>
          </Link>

          <button
            onClick={() => onToggleFavorite(trip)}
            className={`flex items-center gap-3 px-6 py-4 rounded-full border transition-all shadow-sm ${
              isFavorite
                ? 'bg-rose-50 border-rose-200 text-rose-500'
                : 'bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:shadow-md'
            }`}
          >
            <Heart size={24} className={isFavorite ? 'fill-current' : ''} />
            <span className="text-sm font-black uppercase tracking-[0.18em]">
              {isFavorite ? 'В избранном' : 'В избранное'}
            </span>
          </button>
        </div>
      </nav>

      <main className="mx-auto max-w-[1600px] px-6 py-10">
        <div className="mb-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-100 text-orange-700 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
            <MapPin size={12} strokeWidth={3} /> {trip.country}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 tracking-tighter leading-[0.9] mb-6">
            {trip.title}
          </h1>

          <p className="text-xl text-zinc-500 leading-relaxed font-medium italic max-w-4xl">
            {trip.description}
          </p>
        </div>

        <section className="mb-20 grid lg:grid-cols-[minmax(0,1fr)_400px] xl:grid-cols-[minmax(0,1fr)_420px] gap-8 items-start">
          <div className="relative group">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom'
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="rounded-[3rem] overflow-hidden"
            >
              {gallery.map((img, idx) => (
                <SwiperSlide key={idx} className="overflow-hidden rounded-[2.5rem]">
                  <div className="aspect-[16/10] md:aspect-[16/9] w-full relative">
                    <img
                      src={`${import.meta.env.BASE_URL}${img}`}
                      alt={trip.title}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-black/55 via-black/10 to-transparent">
                      <div className="flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                          <Clock3 size={16} />
                          <span className="text-sm font-bold">{trip.duration}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                          <Users size={16} />
                          <span className="text-sm font-bold">до 10 человек</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/20">
                          <Star size={16} className="fill-current text-yellow-300" />
                          <span className="text-sm font-bold">4.9 из 5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black cursor-pointer">
              <ChevronLeft size={28} />
            </button>

            <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black cursor-pointer">
              <ChevronRight size={28} />
            </button>
          </div>

          <aside className="lg:sticky lg:top-28">
            <div className="bg-white rounded-[3rem] p-8 xl:p-9 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-zinc-100">
              <div className="flex items-start justify-between gap-4 mb-7">
                <div>
                  <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 block">
                    Стоимость тура
                  </span>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl xl:text-6xl font-black text-zinc-900 leading-none">
                      ${trip.price}
                    </span>
                    <span className="text-zinc-400 font-bold pb-1">/чел</span>
                  </div>
                </div>

                <div className="px-3 py-2 rounded-2xl bg-orange-50 text-orange-600 border border-orange-100 shrink-0">
                  <Sparkles size={18} />
                </div>
              </div>

              <div className="space-y-4 mb-7">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                    <Clock3 size={18} className="text-orange-500 mb-2" />
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Срок</p>
                    <p className="font-bold text-zinc-900">{trip.duration}</p>
                  </div>

                  <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100">
                    <Users size={18} className="text-orange-500 mb-2" />
                    <p className="text-[10px] font-bold text-zinc-400 uppercase">Группа</p>
                    <p className="font-bold text-zinc-900">до 10 чел.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0">
                    <CalendarDays size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-emerald-600 uppercase">Ближайшая дата</p>
                    <p className="font-bold text-zinc-900">{trip.deadline || '15 — 22 Мая'}</p>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-2xl border border-orange-100">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={18} className="text-orange-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-zinc-900 text-sm">Бесплатная отмена</p>
                      <p className="text-sm text-zinc-500">За 14 дней до начала путешествия</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-4">
                <button className="w-full bg-zinc-900 text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-zinc-200 active:scale-[0.98] cursor-pointer">
                  Забронировать тур
                </button>

                <button className="w-full bg-white text-zinc-900 py-5 rounded-[1.5rem] font-bold text-lg border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50 transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3">
                  <Download size={20} />
                  Скачать программу
                </button>
              </div>

              <p className="text-[10px] text-center text-zinc-400 font-bold uppercase tracking-[0.14em]">
                Гарантия лучшей цены и мгновенное подтверждение
              </p>
            </div>
          </aside>
        </section>

        <div className="space-y-20">
          <section>
            <div className="grid xl:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] gap-8 items-start">
              <div>
                <h2 className="text-3xl font-black text-zinc-900 mb-8">О путешествии</h2>
                <div className="rounded-[2.5rem] bg-white border border-zinc-100 p-8 md:p-10 shadow-sm h-full">
                  <p className="text-lg text-zinc-600 whitespace-pre-line leading-relaxed">
                    {detailedDescription}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-rose-500 text-white p-8 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center mb-6">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-2xl font-black mb-3">Эстетика маршрута</h3>
                  <p className="text-white/85 leading-relaxed">
                    Поездка собрана так, чтобы в ней было много красивых моментов, сильных видов и ощущения настоящего путешествия.
                  </p>
                </div>

                <div className="rounded-[2.5rem] bg-white border border-zinc-100 p-8 shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-6">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 mb-3">Комфорт и поддержка</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Мы берём на себя организацию, логистику и помощь на каждом этапе, чтобы вы могли отдыхать без лишней суеты.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-black text-zinc-900 mb-2">Что вас ждет</h2>
                <p className="text-zinc-500">
                  Самое главное, ради чего стоит поехать в это путешествие.
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-orange-600 border border-orange-100 text-sm font-bold">
                <Sparkles size={16} />
                Проверенный маршрут
              </div>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[1.75rem] border border-zinc-100 bg-white p-5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="absolute right-0 top-0 h-20 w-20 rounded-full bg-orange-100 blur-3xl opacity-50" />

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center mb-4 shadow-md">
                      {item.icon}
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500 mb-3">
                      <CheckCircle2 size={13} className="text-emerald-500" />
                      {item.accent}
                    </div>

                    <h3 className="font-black text-lg text-zinc-900 mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[3rem] bg-zinc-900 text-white p-8 md:p-10 xl:p-12">
            <div className="grid xl:grid-cols-[320px_minmax(0,1fr)] gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4 flex items-center gap-3">
                  <Info className="text-orange-500" />
                  Полезная информация
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Всё, что важно знать до бронирования и перед стартом поездки.
                </p>
              </div>

              <div className="space-y-2">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border-b border-white/10 last:border-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between py-6 text-left gap-6"
                    >
                      <span className="font-bold text-lg">{faq.title}</span>
                      <ChevronDown
                        className={`shrink-0 transition-transform duration-300 ${
                          openFaq === faq.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === faq.id ? 'max-h-40 pb-6' : 'max-h-0'
                      }`}
                    >
                      <p className="text-zinc-400 leading-relaxed">{faq.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="pt-4">
            <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-3xl font-black text-zinc-900 mb-2">Отзывы путешественников</h2>
                <p className="text-zinc-500">
                  Реальные впечатления тех, кто уже был в этом путешествии
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 text-sm font-bold text-zinc-700">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                4.9 средняя оценка
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <article
                  key={index}
                  className="relative overflow-hidden rounded-[2.5rem] bg-white border border-zinc-100 p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-orange-100 blur-2xl opacity-70" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 text-white flex items-center justify-center font-black text-lg shadow-md">
                          {review.avatar}
                        </div>

                        <div>
                          <p className="font-black text-zinc-900">{review.name}</p>
                          <p className="text-sm text-zinc-500">{review.city}</p>
                        </div>
                      </div>

                      <Quote className="text-orange-200" size={28} />
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-zinc-600 leading-relaxed">{review.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};