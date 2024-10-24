'use client'

function AddToCart() {
  return (
    <div>
      <button
        onClick={() => console.log("Clicked")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCart;
