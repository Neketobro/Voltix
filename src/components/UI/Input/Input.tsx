type Props = {
  placeholder: string | undefined;
  isBordered?: boolean;
};

export function Input({ isBordered = false, placeholder }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-150 h-[50px] bg-white px-[20px] rounded-[5px] outline-none ${isBordered ? "border border-(--border) border-solid" : "border border-transparent border-none"}`}
    />
  );
}