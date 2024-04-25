import { Title } from "@/components/ui/title/Title";
import { ProductGrid } from "@/products/components";
import { Categories } from "@/products/interfaces/product.interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Categories;
  };
}

const labels: Record<Categories, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Todos",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  if (!Object.keys(labels).includes(id)) {
    notFound();
  }
  return (
    <div>
      <Title title={`${labels[id]}`} subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </div>
  );
}
