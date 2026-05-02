import { useState } from "react";
import { products } from "../../mock/products";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { useBasket } from "../../context/BasketContext";
import { categories, sortOptions } from "../../shared/config/pizzaFilters";
import CategoriesTabs from "./ui/CategoriesTabs";
import SortDropdown from "./ui/SortDropdown";
import ProductsGrid from "./ui/ProductsGrid";
import SpaceBackground from "../../components/SpaceBackground";
import MovieSearch from "../../components/MovieSearch";
import MovieSidePosters from "../../components/MovieSidePosters";
import StickyCart from "../../components/StickyCart";




export default function HomePage() {
    const { addItem, basket } = useBasket();
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSort, setActiveSort] = useState(0);

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
        <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
            <SpaceBackground />

            <StickyCart />
            
            <div className="relative z-10">

                <MovieSidePosters />

                <div className="relative z-10 mx-auto max-w-[1160px] px-4 py-8">
                    <Header />

                    <MovieSearch />

                    <section>
                        <CategoriesTabs
                            value={activeCategory}
                            onChangeCategory={setActiveCategory}
                        />

                        <div className="mt-8 flex items-end justify-between gap-6">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white">
                                {categories[activeCategory]} пиццы
                            </h2>

                            <SortDropdown
                                value={activeSort}
                                onChangeSort={setActiveSort}
                                options={sortOptions}
                            />
                        </div>

                        <ProductsGrid
                            products={filteredProducts}
                            addItem={addItem}
                            basket={basket}
                        />
                    </section>
                </div>

                <Footer />
            </div>
        </main>
    );
}