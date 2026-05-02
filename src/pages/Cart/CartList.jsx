import CartItem from "./CartItem";

export default function CartList({ items, addItem, decreaseItem, removeItem }) {
    return (
        items.map((item) => (
            <CartItem
                key={`${item.id}-${item.size}-${item.type}`}
                name={item.name}
                image={item.image}
                count={item.quantity}
                price={item.price}
                size={item.size}
                type={item.type}
                item={item}
                addItem={addItem}
                decreaseItem={decreaseItem}
                removeItem={removeItem}
            />
        ))
    );
}
