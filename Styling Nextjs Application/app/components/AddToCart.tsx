'use client'
import style from './ProductCard.module.css'

function AddToCart() {
  return (
    <div>
      <button
        onClick={() => console.log("Clicked")}
        className={`${style.cardContainer} text-white font-bold py-2 px-4 `}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
