import { FiPlus, FiMinus } from "react-icons/fi";
import { useState } from "react";

const Quantity = ({ quantityNum }) => {
  const quantityNumber = quantityNum ? quantityNum : 0;
  const [quantity, setQuantity] = useState(quantityNumber);

  const addQuantity = () => setQuantity(quantity + 1);

  const lessQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div
        className="btn-group overflow-hidden"
        role="group"
        aria-label="Basic example"
      >
        {/* <!-- less btn --> */}
        <button
          type="button"
          className="quantity-btn rounded-lg px-2 text-paragraph font-weight-bold border-0"
          onClick={lessQuantity}
        >
          <FiMinus />
        </button>

        {/* <!-- paragraph text --> */}
        <div className="quantity font-weight-bold d-flex justify-content-center align-items-center border-0 bg-light-grey-2">
          <p className="paragraph-text mb-0">{quantity}</p>
        </div>

        {/* <!-- add button --> */}
        <button
          type="button"
          className="quantity-btn rounded-lg bg-color-primary text-paragraph font-weight-bold px-2 border-0"
          onClick={addQuantity}
        >
          <FiPlus />
        </button>
      </div>
      <style jsx>{`
        .quantity {
          min-width: 75px;
        }
        .quantity-btn {
          padding: 5px 7px;
        }
        .quantity-btn:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default Quantity;
