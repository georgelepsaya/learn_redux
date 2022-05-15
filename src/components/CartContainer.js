import React, { Component } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

function withSelector(Component) {
  return (props) => {
    const dispatch = useDispatch();
    const { cartItems, total, amount } = useSelector((state) => state.cart);
    return (
      <Component
        {...props}
        cartItems={cartItems}
        total={total}
        amount={amount}
        dispatch={dispatch}
      />
    );
  };
}

class CartContainer extends Component {
  render() {
    if (this.props.amount < 1) {
      return (
        <section className="cart">
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      );
    }
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {this.props.cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${this.props.total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => this.props.dispatch(clearCart())}
          >
            clear cart
          </button>
        </footer>
      </section>
    );
  }
}

export default withSelector(CartContainer);
