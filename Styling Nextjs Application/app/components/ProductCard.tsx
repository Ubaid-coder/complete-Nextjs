import AddToCart from "./AddToCart";


function ProductCard() {

  return (
    <div className={`py-5`}>
      <h1>This is our products</h1>
      <p>Add your product cards here</p>
      <AddToCart/>
    </div>
  );
}

export default ProductCard;
