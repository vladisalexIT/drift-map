import { categories } from "../../../shared/config/pizzaFilters";

export default function CategoriesTabs({value, onChangeCategory}) {
    return (
        <nav aria-label="Категории пицц" className="flex flex-wrap gap-3">
            {categories.map((item, index) => (
                <button
                    key={item}
                    onClick={() => onChangeCategory(index)}
                    className={[
                        "rounded-full px-5 py-2 text-sm font-semibold transition cursor-pointer",
                        value === index ? "bg-[#1f1f1f] text-white" : "bg-white text-[#1f1f1f]",
                    ].join(" ")}
                >
                    {item}
                </button>
            ))}
        </nav>
    )
}
