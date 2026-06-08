import {
  HomeIcon,
  Squares2X2Icon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { IconButton } from "../../UI/Buttons/IconButton";
import { useTranslation } from "react-i18next";

export function ActionPanel() {
  const { t } = useTranslation("actionpanel");

  const items = [
    { key: "main", icon: HomeIcon },
    { key: "catalog", icon: Squares2X2Icon },
    { key: "profile", icon: UserCircleIcon },
    { key: "favorite", icon: HeartIcon },
    { key: "cart", icon: ShoppingCartIcon },
  ];

  return (
    <div className="flex gap-[20px] md:gap-[10px]">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <IconButton
            key={item.key}
            textColor="white"
            icon={<Icon className="size-6" color="#fff" />}
          >
            {t(item.key)}
          </IconButton>
        );
      })}
    </div>
  );
}
