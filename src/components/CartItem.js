import React, { Component } from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function withDispatch(Component) {
  return (props) => {
    const dispatch = useDispatch();
    return <Component {...props} dispatch={dispatch} />;
  };
}

export class CartItem extends Component {
  render() {
    return (
      <article className="cart-item">
        <img src={this.props.img} alt={this.props.title} />
        <div>
          <h4>{this.props.title}</h4>
          <h4 className="item-price">${this.props.price}</h4>
          <button
            className="remove-btn"
            onClick={() => this.props.dispatch(removeItem(this.props.id))}
          >
            remove
          </button>
        </div>
        <div>
          <button className="amount-btn">
            <ChevronUp />
          </button>
          <p className="amount">{this.props.amount}</p>
          <button className="amount-btn">
            <ChevronDown />
          </button>
        </div>
      </article>
    );
  }
}

export default withDispatch(CartItem);
