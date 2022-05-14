import React, { Component } from "react";
import { ChevronDown, ChevronUp } from "../icons";

export class CartItem extends Component {
  render() {
    return (
      <article className="cart-item">
        <img src={this.props.img} alt={this.props.title} />
        <div>
          <h4>{this.props.title}</h4>
          <h4 className="item-price">${this.props.price}</h4>
          <button className="remove-btn">remove</button>
        </div>
      </article>
    );
  }
}

export default CartItem;
