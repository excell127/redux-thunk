import * as React from "react";
import { useDispatch } from "react-redux";
import { getProducts, useProduct } from "../features/productSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, products } = useProduct();

  React.useEffect(() => {
    dispatch(getProducts("https://fakestoreapi.com/products"));
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => <h1 key={product.id}>{product.title}</h1>)
      )}
    </>
  );
}

export default App;
