import { Button } from "../../UI";
type Props = {
  className?: string;
};
export function NewArrivals({ className }: Props) {
  return (
    <div
      className={`${className} flex flex-col gap-[10px] bg-white min-w-[220px] max-w-[220px] px-[20px] py-[10px] border border-(--border) border-solid rounded-md`}
    >
      <h2>New arrivals</h2>
      <p className="text-xs">Be first to see gadgets</p>
      <img className="h-40" src="src\assets\products\Product1.png" alt="phone image" />
      <Button arrowIcon={true} onClick={() => {}}>
        View new
      </Button>
    </div>
  );
}
