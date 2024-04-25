"use client";
import { useState } from "react";

interface Props {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, setQuantity }: Props) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (count + value < 1) return;

    setCount(count + value);
  };
  return (
    <div>
      QuantitySelector
      <button onClick={() => onQuantityChange(-1)}>-</button>
      {count}
      <button onClick={() => onQuantityChange(1)}>+</button>
    </div>
  );
};
