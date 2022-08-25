import { useContext } from "react";

import { CartContext } from "../../context/cart.contex";

import {
  CheckoutButton,
  CheckoutImageContainer,
  CheckoutItemContainer,
  CheckoutName,
  CheckoutPrice,
  CheckoutQuantity
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </CheckoutQuantity>
      <CheckoutPrice>${price}</CheckoutPrice>
      <CheckoutButton onClick={clearItemHandler}>&#10005;</CheckoutButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;