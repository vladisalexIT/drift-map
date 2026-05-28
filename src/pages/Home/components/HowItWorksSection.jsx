import { STEPS } from '../constants/home.constants';

const HowItWorksSection = () => {
  return (
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
        {STEPS.map((step, index) => {
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
  );
};

export default HowItWorksSection;