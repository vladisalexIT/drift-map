import { useState } from "react";
import { products } from "../../mock/products";
import Header from "../../components/Header";
import { useBasket } from "../../context/BasketContext";
import PizzaBlock from "../../components/PizzaBlock";

const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sizes = ["26 см.", "30 см.", "40 см."];
const types = ["тонкое", "традиционное"];

const sortOptions = [
    { name: "популярности", property: "rating" },
    { name: "по цене", property: "price" },
    { name: "по алфавиту", property: "name" },
];



export default function HomePage() {
    const { addItem, basket } = useBasket();
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
            if (prop === "name") return a[prop].localeCompare(b[prop]);
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
                                onClick={() => setActiveCategory(index)}
                                className={[
                                    "rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer",
                                    activeCategory === index ? "bg-[#1f1f1f] text-white" : "bg-white text-[#1f1f1f]",
                                ].join(" ")}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 flex items-end justify-between gap-6">
                        <h2 className="text-[30px] font-extrabold">{categories[activeCategory]} пиццы</h2>

                        <div className="relative hidden md:block">
                            <div className="flex items-center gap-2">
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
                                    {sortOptions.map((obj, i) => (
                                        <div
                                            key={i}
                                            onClick={() => { setActiveSort(i); setIsSortOpen(false); }}
                                            className={`cursor-pointer px-4 py-3 text-sm ${activeSort === i ? "text-[#fe5f1e] font-bold" : ""}`}
                                        >
                                            {obj.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <section className="mt-6">
                        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <PizzaBlock
                                    key={product.id}
                                    {...product}
                                    addItem={addItem}
                                    basket={basket}
                                />
                            ))}
                        </ul>
                    </section>
                </section>
            </div>
        </main>
    );
}