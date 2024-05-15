export const revalidate = 60;

import { Title } from "@/components/ui/title/Title";
import UniversalPagination from "@/components/universal-pagination/UniversalPagination";
import { getPaginatedProductsWithImages } from "@/products/actions/products-pagination";
import { ProductGrid } from "@/products/components";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: string;
    take?: string;
  };
}

const labels: Record<string, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Todos",
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const { gender } = params;

  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const take = searchParams.take ? parseInt(searchParams.take) : 12;
  const { products, totalPages, currentPage } =
    await getPaginatedProductsWithImages({
      page,
      take,
      gender: gender as Gender,
    });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  if (!Object.keys(labels).includes(gender)) {
    notFound();
  }
  return (
    <div>
      <Title title={`${labels[gender]}`} subtitle="Todos los productos" />
      <ProductGrid products={products} />
      <UniversalPagination totalPages={totalPages} />
    </div>
  );
}
