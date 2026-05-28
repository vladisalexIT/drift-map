import {
  BadgePercent,
  ShieldCheck,
  Headphones,
  WalletCards,
  Compass,
  CreditCard,
} from 'lucide-react';

export const TRIP_TYPES = [
  'Все',
  'Пляжный',
  'Городской',
  'Природный',
  'Активный',
  'Wellness',
];

export const TITLE_BY_TYPE = {
  Все: 'Популярные направления',
  Пляжный: 'Пляжные направления',
  Городской: 'Городские направления',
  Природный: 'Природные направления',
  Активный: 'Активные направления',
  Wellness: 'Оздоровительные направления',
};

export const ITEMS_PER_PAGE = 9;

export const MONTH_MAP = {
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

export const PERKS = [
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

export const STEPS = [
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