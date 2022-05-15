import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

function withDispatch(Component) {
  return (props) => {
    const dispatch = useDispatch();
    return <Component {...props} dispatch={dispatch} />;
  };
}

class Modal extends Component {
  render() {
    return (
      <aside className="modal-container">
        <div className="modal">
          <h4>remove all items from your shopping cart?</h4>
          <div className="btn-container">
            <button
              type="button"
              className="btn confirm-btn"
              onClick={() => {
                this.props.dispatch(clearCart());
                this.props.dispatch(closeModal());
              }}
            >
              confirm
            </button>
            <button
              type="button"
              className="btn clear-btn"
              onClick={() => this.props.dispatch(closeModal())}
            >
              cancel
            </button>
          </div>
        </div>
      </aside>
    );
  }
}

export default withDispatch(Modal);
