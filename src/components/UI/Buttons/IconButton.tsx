import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import type { ReactNode } from "react";

type Props = {
  children: string | undefined;
  icon: ReactNode;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  textColor?: "text" | "primary" | "secondary" | "white";
  iconColor?: "text" | "primary" | "secondary" | "white";
};

export function IconButton({
  children,
  icon,
  direction = "col",
  textColor = "text",
  iconColor = "text",
}: Props) {
  const directionVariable = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };
  const color = {
    text: "text-(--text)",
    primary: "text-(--primary)",
    secondary: "text-(--text-secondary)",
    white: "text-(--text-h)",
  };

  return (
    <button
      className={`flex ${directionVariable[direction]} active:scale-[0.95] transition duration-100 ease-in-out cursor-pointer items-center gap-[5px]`}
    >
      {icon || (
        <QuestionMarkCircleIcon
          className={`${color[iconColor]} size-7 stroke-[2px]`}
        />
      )}
      <p className={`${color[textColor]} text-sm`}>{children}</p>
    </button>
  );
}
