import useLoginForm from "../../hooks/useLoginForm";

export default function LoginForm({ onSuccess }) {
    const { formData, errors, handleChange, handleBlur, handleSubmit } =
      useLoginForm({ onSuccess });

    return (
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#f5e2e2]">
                  Имя
              </label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff7a1a] focus:ring-2 focus:ring-[#ff7a1a]/30"
                  placeholder="Введите имя"
              />
              {errors.name && (
                  <p className="mt-2 text-sm text-[#ff8e8e]">{errors.name}</p>
              )}
          </div>

          <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-[#f5e2e2]">
                  Пароль
              </label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  minLength={8}
                  maxLength={16}
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-[#ff7a1a] focus:ring-2 focus:ring-[#ff7a1a]/30"
                  placeholder="Введите пароль"
              />
              {errors.password && (
                  <p className="mt-2 text-sm leading-5 text-[#ff8e8e]">
                      {errors.password}
                  </p>
              )}
          </div>

          <button
              type="submit"
              className="w-full rounded-2xl bg-[#ff7a1a] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#f06f0f] active:scale-[0.99] cursor-pointer"
          >
              Войти
          </button>
      </form>
  );
}