import {
  HomeIcon,
  Squares2X2Icon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from "../UI/Buttons/IconButton";
import { Button } from "../UI";

type Props = {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  className?: string;
};

export function ListCategorises({ direction = "col", className = "hidden" }: Props) {
  const directionVariable = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  return (
    <div
      className={`${className} flex gap-[10px] bg-white ${directionVariable[direction]} min-w-[220px] max-w-[220px] px-[20px] py-[10px] border border-(--border) border-solid rounded-md`}
    >
      <h2>Categories</h2>
      <IconButton
        direction="row"
        icon={<HomeIcon className="size-6 text-(--primary)" />}
      >
        Smartphones
      </IconButton>
      <IconButton
        direction="row"
        icon={<Squares2X2Icon className="size-6 text-(--primary)" />}
      >
        Laptops
      </IconButton>
      <IconButton
        direction="row"
        icon={<ShoppingCartIcon className="size-6 text-(--primary)" />}
      >
        Tablets
      </IconButton>
      <IconButton
        direction="row"
        icon={<ShoppingCartIcon className="size-6 text-(--primary)" />}
      >
        Headphones
      </IconButton>
      <IconButton
        direction="row"
        icon={<UserCircleIcon className="size-6 text-(--primary)" />}
      >
        Smart Watches
      </IconButton>
      <IconButton
        direction="row"
        icon={<HeartIcon className="size-6 text-(--primary)" />}
      >
        Accessories
      </IconButton>
      <Button arrowIcon={true} onClick={()=>{}}>View all categories</Button>
    </div>
  );
}
