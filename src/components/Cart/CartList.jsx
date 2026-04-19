import CartItem from "./CartItem";

export default function CartList({ items }) {
    return (
        items.map((item) => (
            <CartItem key={item.id} name={item.name} image={item.image} count="1" price={item.price} />
        ))
    )
}
