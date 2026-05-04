import { Link } from "react-router";
import Logo from "../components/Logo";
export default function Footer() {
    return (
        <footer className="relative mt-16 border-t border-white/10 bg-white/5 backdrop-blur-md">
            <div className="mx-auto max-w-[1160px] px-4 py-10">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col justify-between" >
                        <Logo />
                        <p className="max-w-sm text-sm leading-6 text-white/70">
                            Уютное сочетание кинонастроения и вкусной пиццы. 
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                            Пиццы
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#ff7a1a] transition-colors hover:text-[#ff9b4d]"
                                >
                                    Каталог пицц
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#ff7a1a] transition-colors hover:text-[#ff9b4d]"
                                >
                                    Акции и новинки
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-[#ff7a1a] transition-colors hover:text-[#ff9b4d]"
                                >
                                    Корзина и оформление
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                            Фильмы
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-purple-600 transition-colors hover:text-purple-400"
                                >
                                    Поиск фильмов
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-purple-600 transition-colors hover:text-purple-400"
                                >
                                    Популярные постеры
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-purple-600 transition-colors hover:text-purple-400"
                                >
                                    Подборки и рекомендации
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                            Контакты
                        </h4>
                        <div className="space-y-3 text-sm text-white/70">
                            <p>Работаем ежедневно</p>
                            <p>Быстрая доставка и удобный поиск</p>
                            <p>Поддержка и вопросы — через форму на сайте</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
                    <p>© 2026 CinemaPizza. Все права защищены.</p>
                </div>
            </div>
        </footer>
    );
}
