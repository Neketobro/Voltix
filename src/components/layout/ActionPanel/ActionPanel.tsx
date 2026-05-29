import {
  HomeIcon,
  Squares2X2Icon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from "../../UI/Buttons/IconButton";

export function ActionPanel() {
  return (
    <div className="flex gap-[20px] md:gap-[10px]">
      <IconButton
        textColor="white"
        icon={<HomeIcon className="size-6" color="#fff" />}
      >
        Main
      </IconButton>
      <IconButton
        textColor="white"
        icon={<Squares2X2Icon className="size-6" color="#fff" />}
      >
        Catalog
      </IconButton>
      <IconButton
        textColor="white"
        icon={<UserCircleIcon className="size-6" color="#fff" />}
      >
        Profile
      </IconButton>
      <IconButton
        textColor="white"
        icon={<HeartIcon className="size-6" color="#fff" />}
      >
        Favorite
      </IconButton>
      <IconButton
        textColor="white"
        icon={<ShoppingCartIcon className="size-6" color="#fff" />}
      >
        Busket
      </IconButton>
    </div>
  );
}
