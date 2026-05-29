import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";

type Props = {
  children: string | undefined;
  type?: "primary" | "disabled" | "bordered";
  onClick: () => void;
  arrowIcon?: boolean;
};

export function Button({ children, type = "primary", onClick, arrowIcon = false }: Props) {
  const colors = {
    primary:
      "bg-(--primary) text-(--text-h) hover:bg-(--primary-d) active:bg-(--primary-d)",
    bordered:
      "border-(--primary) font-semibold border border-solid bg-transparent text-(--primary) hover:border-(--primary-d) active:border-(--primary-d) hover:text-(--primary-d) active:text-(--primary-d)",
    disabled: "bg-(--border) text-(--text-h) ",
  };

  return (
    <button
      className={`${colors[type]} min-w-[150px] h-[40px] px-[10px] rounded-md active:scale-[0.95] transition duration-100 ease-in-out cursor-pointer `}
      onClick={onClick}
    >
      {children}
      {/* {!arrowIcon || <ArrowUpOnSquareIcon className={`size-6 ${colors[type]}`} />} */}
    </button>
  );
}
