import { MONTH_MAP } from '../constants/home.constants';

export const normalizeDate = (date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const parseDeadline = (deadline) => {
  if (!deadline || typeof deadline !== 'string') return null;

  const parts = deadline.trim().toLowerCase().split(' ');
  if (parts.length < 2) return null;

  const day = parseInt(parts[0], 10);
  const month = MONTH_MAP[parts[1]];

  if (Number.isNaN(day) || month === undefined) return null;

  const date = new Date(new Date().getFullYear(), month, day);
  date.setHours(0, 0, 0, 0);

  return date;
};