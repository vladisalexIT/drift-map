import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { PERKS } from '../constants/home.constants';

const PerksSection = () => {
  return (
    <div className="mt-20">
      <div className="overflow-hidden rounded-[36px]">
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
          {PERKS.map((item) => {
            const Icon = item.icon;

            return (
              <SwiperSlide key={item.id}>
                <div
                  className={`relative min-h-[260px] overflow-hidden rounded-[30px] bg-gradient-to-r ${item.accent} px-6 py-8 text-white sm:px-10 sm:py-10 lg:min-h-[300px] lg:px-14`}
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
                        className="cursor-pointer rounded-2xl bg-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/30 transition hover:bg-white/30"
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
  );
};

export default PerksSection;