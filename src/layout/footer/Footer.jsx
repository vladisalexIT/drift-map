import { Link } from "react-router";
import Logo from "../../components/Logo";
import FooterSection from './FooterSection'

const footerSections = [
  {
    title: "Пиццы",
    links: [
      { label: "Каталог пицц", href: "#", type: "a", color: "text-[#ff7a1a] hover:text-[#ff9b4d]" },
      { label: "Акции и новинки", href: "#", type: "a", color: "text-[#ff7a1a] hover:text-[#ff9b4d]" },
      { label: "Корзина и оформление", to: "/cart", type: "link", color: "text-[#ff7a1a] hover:text-[#ff9b4d]" },
    ],
  },
  {
    title: "Фильмы",
    links: [
      { label: "Поиск фильмов", href: "#", type: "a", color: "text-purple-600 hover:text-purple-400" },
      { label: "Популярные постеры", href: "#", type: "a", color: "text-purple-600 hover:text-purple-400" },
      { label: "Подборки и рекомендации", href: "#", type: "a", color: "text-purple-600 hover:text-purple-400" },
    ],
  },
  {
    title: "Контакты",
    content: [
      "Работаем ежедневно",
      "Быстрая доставка и удобный поиск",
      "Поддержка и вопросы — через форму на сайте",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto max-w-[1160px] px-4 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col justify-between">
            <Logo />
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Уютное сочетание кинонастроения и вкусной пиццы.
            </p>
          </div>

          {footerSections.map((section) => (
            <FooterSection key={section.title} title={section.title}>
              {"links" in section ? (
                <ul className="space-y-3 text-sm">
                  {section.links.map((item) => (
                    <li key={item.label}>
                      {item.type === "link" ? (
                        <Link
                          to={item.to}
                          className={`transition-colors ${item.color}`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className={`transition-colors ${item.color}`}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3 text-sm text-white/70">
                  {section.content.map((text) => (
                    <p key={text}>{text}</p>
                  ))}
                </div>
              )}
            </FooterSection>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CinemaPizza. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
