import { useState } from 'react';
import { Mail, Lock, User2, AlertCircle } from 'lucide-react';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function AuthForm({ mode = 'login', onSuccess }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const isRegister = mode === 'register';

  const validate = () => {
    const nextErrors = {};

    if (isRegister && !form.name.trim()) {
      nextErrors.name = 'Введите имя';
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Введите email';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = 'Некорректный email';
    }

    if (!form.password.trim()) {
      nextErrors.password = 'Введите пароль';
    } else if (form.password.length < 6) {
      nextErrors.password = 'Минимум 6 символов';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const user = {
      name: form.name.trim() || form.email.split('@')[0],
      email: form.email.trim(),
    };

    localStorage.setItem('mockUser', JSON.stringify(user));
    onSuccess?.(user);
    setForm(initialState);
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isRegister && (
        <div>
          <label className="mb-2 block text-sm font-semibold text-zinc-700">
            Имя
          </label>
          <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 shadow-sm ring-1 ring-white/60 backdrop-blur-sm">
            <User2 size={18} className="text-sky-600" />
            <input
              type="text"
              value={form.name}
              onChange={handleChange('name')}
              placeholder="Например, Алексей"
              className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400"
            />
          </div>
          {errors.name && (
            <p className="mt-2 flex items-center gap-2 text-sm text-rose-500">
              <AlertCircle size={16} />
              {errors.name}
            </p>
          )}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-700">
          Email
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 shadow-sm ring-1 ring-white/60 backdrop-blur-sm">
          <Mail size={18} className="text-sky-600" />
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400"
          />
        </div>
        {errors.email && (
          <p className="mt-2 flex items-center gap-2 text-sm text-rose-500">
            <AlertCircle size={16} />
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-zinc-700">
          Пароль
        </label>
        <div className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/80 px-4 py-3 shadow-sm ring-1 ring-white/60 backdrop-blur-sm">
          <Lock size={18} className="text-sky-600" />
          <input
            type="password"
            value={form.password}
            onChange={handleChange('password')}
            placeholder="Минимум 6 символов"
            className="w-full bg-transparent text-zinc-900 outline-none placeholder:text-zinc-400"
          />
        </div>
        {errors.password && (
          <p className="mt-2 flex items-center gap-2 text-sm text-rose-500">
            <AlertCircle size={16} />
            {errors.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-[1.25rem] bg-zinc-900 py-4 text-base font-bold text-white shadow-lg shadow-sky-100 transition-all hover:bg-sky-700 active:scale-[0.99] cursor-pointer"
      >
        {isRegister ? 'Создать аккаунт' : 'Войти'}
      </button>
    </form>
  );
}