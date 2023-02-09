//create cart component 

function CartItems({ cartItem, RemoveFromCart }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{cartItem.title}</div>
                {cartItem.price}
            </div>
            <button onClick={() => { RemoveFromCart(cartItem) }} className="badge bg-primary rounded-pill">x</button>
        </li>
    )
}

export default CartItems;