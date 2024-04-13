import { Aside } from "@/components/ui/aside/Aside";
import { TopMenu } from "@/components/ui/top-menu";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen ">
      <TopMenu />
      <Aside />
      <div className="sm:px-10">{children}</div>
    </div>
  );
}
