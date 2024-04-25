import { Title } from "@/components/ui/title/Title";
import { ProductGrid } from "@/products/components";
import { initialData } from "@/seed/seed";
import React from "react";

const products = initialData.products;

const HomePage = () => {
  return (
    <div>
      <Title title="Men" subtitle="best sellers" />
      <ProductGrid products={products} />
    </div>
  );
};

export default HomePage;
