import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
<<<<<<< HEAD
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

=======

function ProductItem(item) {
>>>>>>> 62dbcef8f61deaa2427f466346b90ac2a1db8c2c
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

<<<<<<< HEAD
  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

=======
>>>>>>> 62dbcef8f61deaa2427f466346b90ac2a1db8c2c
  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
<<<<<<< HEAD
      <button onClick={addToCart}>Add to cart</button>
=======
      <button>Add to cart</button>
>>>>>>> 62dbcef8f61deaa2427f466346b90ac2a1db8c2c
    </div>
  );
}

export default ProductItem;
