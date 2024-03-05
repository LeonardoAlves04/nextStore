import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboard = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src={"/banner-home-01.png"}
        alt="55% de desconto só esse mês!"
      />

      <div className=" px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src={"/banner-home-02.png"}
        alt="Até 55% de desconto em mouses!"
      />

      <div className="lg:m-auto">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboard} />
      </div>

      <div>
        <PromoBanner
          src={"/banner-home-03.png"}
          alt="Até 20% de desconto em fones!"
        />
      </div>

      <div className="lg:m-auto">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
