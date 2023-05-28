import React, { useEffect, useState } from "react";

const ProductList = ({ categories }: { categories: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  useEffect(() => {
    console.log("fetching product in ", categories);
    setProducts(["Clothing", "HouseHold"]);
  }, [categories]);
  return <div>ProductList</div>;
};

export default ProductList;
