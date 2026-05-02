import PizzaBlock from "../../../components/PizzaBlock"
export default function ProductsGrid({ products, addItem, basket }) {
    return (
        <section className="mt-6">
            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <PizzaBlock
                        key={product.id}
                        {...product}
                        addItem={addItem}
                        basket={basket}
                    />
                ))}
            </ul>
        </section>
    )
}
