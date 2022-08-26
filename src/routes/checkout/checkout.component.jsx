import { useContext } from "react";

import { CartContext } from "../../context/cart.contex";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTotal,
  CheckoutHeaderBlock
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <span>Product</span>
        </CheckoutHeaderBlock>

        <CheckoutHeaderBlock>
          <span>Description</span>
        </CheckoutHeaderBlock>

        <CheckoutHeaderBlock>
          <span>Quantity</span>
        </CheckoutHeaderBlock>

        <CheckoutHeaderBlock>
          <span>Price</span>
        </CheckoutHeaderBlock>

        <CheckoutHeaderBlock>
          <span>Remove</span>
        </CheckoutHeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
