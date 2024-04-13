import { Product } from "../../interfaces/product.interfaces";
import { ProductItem } from "./ProductItem";

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-4">
      {products.map((product) => (
        <ProductItem key={product.slug} product={product} />
      ))}
    </div>
  );
};
