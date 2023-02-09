//create cart component 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import './card.css'

function CartItems({ cartItem, RemoveFromCart }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{cartItem.title}</div>
                {cartItem.price}
            </div>
            <button onClick={() => { RemoveFromCart(cartItem) }} id='delete'> <FontAwesomeIcon icon={faTrashAlt} /> </button>
        </li>
    )
}

export default CartItems;