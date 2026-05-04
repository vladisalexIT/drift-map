import { useMemo } from "react";
import { categories, sortOptions } from "../shared/config/pizzaFilters";

export default function useFilteredProducts(products, activeCategory, activeSort) {
    return useMemo(() => {
        if (!Array.isArray(products)) return [];

        return [...products]
            .filter(
                (product) =>
                    activeCategory === 0 || product.category === categories[activeCategory]
            )
            .sort((a, b) => {
                const prop = sortOptions[activeSort].property;
                if (prop === "name") return a[prop].localeCompare(b[prop]);
                return b[prop] - a[prop];
            });
    }, [products, activeCategory, activeSort]);
}