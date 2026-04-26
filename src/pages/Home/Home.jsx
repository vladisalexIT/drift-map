import { products } from "../../mock/products";
import Header from "../../components/Header";
import { useBasket } from "../../context/BasketContext";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sizes = ["26 см.", "30 см.", "40 см."];

export default function HomePage() {
    const { addItem, decreaseItem, basket } = useBasket();

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
                                className={[
                                    "rounded-full px-5 py-2 text-sm font-semibold transition",
                                    index === 0
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
                            Все пиццы
                        </h2>

                        <div className="hidden md:block">
                            <button
                                type="button"
                                className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#1f1f1f] shadow-sm"
                            >
                                Сортировка
                            </button>
                        </div>
                    </div>

                    <section aria-label="Список пицц" className="mt-6">
                        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => {
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
                    </section>
                </section>
            </div>
        </main>
    );
}