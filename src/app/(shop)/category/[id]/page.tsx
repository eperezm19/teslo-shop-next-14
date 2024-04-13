import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const categories = ["women", "men", "kids"];

export default function CategoryByIdPage({ params }: Props) {
  const { id } = params;

  if (!categories.includes(id)) {
    notFound();
  }

  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
