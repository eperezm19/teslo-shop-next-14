import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const products = initialData.products.find(
    (product) => product.slug === slug
  );

  if (!products) {
    notFound();
  }

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
