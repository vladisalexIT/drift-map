import { useState } from "react";
import { products } from "../../mock/products";
import Header from "../../components/Header";
import { useBasket } from "../../context/BasketContext";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sizes = ["26 см.", "30 см.", "40 см."];

const sortOptions = [
    { name: "популярности", property: "rating" },
    { name: "по цене", property: "price" },
    { name: "по алфавиту", property: "name" },
];


export default function HomePage() {
    const { addItem, decreaseItem, basket } = useBasket();

    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSort, setActiveSort] = useState(0);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const filteredProducts = products
        .filter(
            (product) =>
                activeCategory === 0 || product.category === categories[activeCategory]
        )
        .sort((a, b) => {
            const prop = sortOptions[activeSort].property;

            if (prop === "name") {
                return a[prop].localeCompare(b[prop]);
            }

            return b[prop] - a[prop];
        });

    return (
        <main className="min-h-screen bg-[#FAD97A] text-[#1f1f1f]">
            <div className="mx-auto max-w-[1160px] px-4 py-8">
                <Header />

                <section className="pt-1">
                    <nav aria-label="Категории пицц" className="flex flex-wrap gap-3">
                        {categories.map((item, index) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setActiveCategory(index)}
                                className={[
                                    "rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer",
                                    activeCategory === index
                                        ? "bg-[#1f1f1f] text-white"
                                        : "bg-white text-[#1f1f1f] hover:bg-white/90",
                                ].join(" ")}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 flex items-end justify-between gap-6">
                        <h2 className="text-[30px] font-extrabold leading-none tracking-tight">
                            {categories[activeCategory]} пиццы
                        </h2>

                        <div className="relative hidden md:block">
                            <div className="flex items-center gap-2">
                                <span className={`transition-transform duration-200 ${isSortOpen ? "" : "rotate-180"}`}>
                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C" />
                                    </svg>
                                </span>
                                <b className="text-sm">Сортировка по:</b>
                                <span
                                    className="cursor-pointer border-b border-dotted border-[#fe5f1e] text-sm text-[#fe5f1e]"
                                    onClick={() => setIsSortOpen(!isSortOpen)}
                                >
                                    {sortOptions[activeSort].name}
                                </span>
                            </div>

                            {isSortOpen && (
                                <div className="absolute right-0 z-10 mt-3 w-40 overflow-hidden rounded-xl bg-white py-3 shadow-xl">
                                    <ul>
                                        {sortOptions.map((obj, i) => (
                                            <li
                                                key={i}
                                                onClick={() => {
                                                    setActiveSort(i);
                                                    setIsSortOpen(false);
                                                }}
                                                className={`cursor-pointer px-4 py-3 text-sm transition-colors hover:bg-[#fe5f1e]/5 ${activeSort === i ? "bg-[#fe5f1e]/10 font-bold text-[#fe5f1e]" : ""
                                                    }`}
                                            >
                                                {obj.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    <section aria-label="Список пицц" className="mt-6">
                        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProducts.map((product) => {
                                const basketItem = basket.find((item) => item.id === product.id);
                                const count = basketItem?.quantity || 0;

                                return (
                                    <li key={product.id} className="flex flex-col">
                                        <article className="flex h-full flex-col">
                                            <div className="mb-3 overflow-hidden rounded-md bg-white p-3 shadow-sm">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="aspect-square w-full object-contain"
                                                    loading="lazy"
                                                />
                                            </div>

                                            <h3 className="mb-5 text-center text-[18px] font-extrabold leading-tight">
                                                {product.name}
                                            </h3>

                                            <div className="rounded-xl bg-white p-2 shadow-sm">
                                                <div className="grid grid-cols-2 overflow-hidden rounded-lg bg-[#f4f4f4] text-[11px] font-semibold text-[#7a7a7a]">
                                                    <div className="flex h-8 items-center justify-center border-r border-white bg-white">
                                                        тонкое
                                                    </div>
                                                    <div className="flex h-8 items-center justify-center border-r border-white">
                                                        традиционное
                                                    </div>
                                                </div>

                                                <div className="mt-2 grid grid-cols-3 gap-1 text-center text-sm font-semibold">
                                                    {sizes.map((size, idx) => (
                                                        <button
                                                            key={size}
                                                            type="button"
                                                            className={[
                                                                "rounded-md px-1 py-2 transition",
                                                                idx === 0
                                                                    ? "bg-[#1f1f1f] text-white"
                                                                    : "bg-[#f6f2e8] text-[#8a8a8a] hover:bg-[#efe8d8]",
                                                            ].join(" ")}
                                                        >
                                                            {size}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-4 flex items-center justify-between gap-3">
                                                <div className="text-[18px] font-extrabold">
                                                    от {product.price} ₽
                                                </div>

                                                {count > 0 ? (
                                                    <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a] bg-white px-3 py-2">
                                                        <button
                                                            type="button"
                                                            onClick={() => decreaseItem(product.id)}
                                                            className="h-7 w-7 rounded-full bg-[#fff3ea] text-lg font-bold text-[#ff7a1a] cursor-pointer"
                                                        >
                                                            -
                                                        </button>

                                                        <span className="min-w-5 text-center text-sm font-bold">
                                                            {count}
                                                        </span>

                                                        <button
                                                            type="button"
                                                            onClick={() => addItem(product)}
                                                            className="inline-flex items-center gap-2 rounded-full text-sm font-bold text-[#ff7a1a] cursor-pointer"
                                                        >
                                                            <span>Добавить</span>
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        onClick={() => addItem(product)}
                                                        className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a] bg-white px-4 py-2 text-sm font-bold text-[#ff7a1a] cursor-pointer"
                                                    >
                                                        <span>+</span>
                                                        <span>Добавить</span>
                                                    </button>
                                                )}
                                            </div>
                                        </article>
                                    </li>
                                );
                            })}
                        </ul>
                        {filteredProducts.length === 0 && (
                            <div className="py-28 text-center">
                                <p className="text-4xl font-extrabold text-[#1f1f1f]">
                                    Упс, здесь пока пусто 🍕
                                </p>
                                <p className="mt-3 text-2xl text-[#6b6b6b]">
                                    Но мы уже готовим что-то вкусное для этой категории.
                                </p>
                            </div>
                        )}
                    </section>
                </section>
            </div>
        </main>
    );
}