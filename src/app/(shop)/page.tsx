export const revalidate = 60;

import { Title } from "@/components/ui/title/Title";
import UniversalPagination from "@/components/universal-pagination/UniversalPagination";
import { getPaginatedProductsWithImages } from "@/products/actions/products-pagination";
import { ProductGrid } from "@/products/components";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  searchParams: {
    page?: string;
    take?: string;
  };
}

const HomePage = async ({ searchParams }: Props) => {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const take = searchParams.take ? parseInt(searchParams.take) : 12;
  const { products, totalPages, currentPage } =
    await getPaginatedProductsWithImages({
      page,
      take,
    });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <div>
      <Title title="Men" subtitle="best sellers" />
      <ProductGrid products={products} />
      <UniversalPagination totalPages={totalPages} />
    </div>
  );
};

export default HomePage;
