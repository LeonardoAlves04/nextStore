import { CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className=" flex items-center gap-4">
        {/* <div> parte direita foto e nome</div> */}

        <div className="flex h-[80px] w-[80px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            sizes="100vw"
            width={0}
            height={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              R$ {product.totalPrice.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            )}
          </div>

          <div className=" flex items-center gap-1">
            <Button size="icon" variant="outline" className="h-6 w-6 bg-accent">
              <ArrowLeftIcon size={12} />
            </Button>

            <span className="text-xs"> {product.quantity}</span>

            <Button size="icon" variant="outline" className="h-6 w-6 bg-accent">
              <ArrowRightIcon size={12} />
            </Button>
          </div>
        </div>
      </div>

      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
