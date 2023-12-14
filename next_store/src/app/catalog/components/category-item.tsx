import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`category/${category.slug}`}>
      <div className="lg:grid-cols flex flex-col lg:grid">
        <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-gradient-to-r from-[#008000] to-[#47E10C] lg:w-[80%]">
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="500vw"
            className="h-auto max-h-[80%] w-auto max-w-[80%]"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3 lg:w-[80%]">
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
