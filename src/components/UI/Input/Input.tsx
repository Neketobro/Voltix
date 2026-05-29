import type { HTMLInputTypeAttribute } from "react";

type Props = {
  placeholder: string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  isBordered?: boolean;
};

export function Input({
  isBordered = false,
  placeholder,
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`sm:w-70 md:w-80 lg:w-120 xl:w-120 2xl:w-150 h-[50px] bg-white px-[20px] rounded-md outline-none ${isBordered ? "border border-(--border) border-solid" : "border border-transparent border-none"}`}
    />
  );
}
