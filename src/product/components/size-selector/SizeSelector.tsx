"use client";

import { Button } from "@/components/ui/button";
import { Size } from "@/products/interfaces/product.interfaces";

interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div>
      {availableSizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "secondary"}
        >
          {size}
        </Button>
      ))}
    </div>
  );
};
