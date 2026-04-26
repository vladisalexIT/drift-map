import CartItem from "./CartItem";

export default function CartList({ items, addItem, decreaseItem }) {
    return (
        items.map((item) => (
            <CartItem key={item.id} name={item.name} image={item.image} count={item.quantity} price={item.price} item={item} addItem={addItem}
          decreaseItem={decreaseItem} />
        ))
    )
}
