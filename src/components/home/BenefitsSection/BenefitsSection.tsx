import { Benefite, Button } from "../../UI";

export function BenefitsSection() {
  return (
    <div className="w-full h-[70px] rounded-sm border border-(--border) bg-(--primary-l) flex items-center px-2 gap-2">
      <div className="flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title="Free delivery" subtitle="For orders from 1000 UAH" icon="1" />
      </div>

      <div className="hidden md:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title="Payment" subtitle="Up to 24 months" icon="2" />
      </div>

      <div className="hidden lg:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title="Official warranty" subtitle="12 months" icon="3" />
      </div>

      <div className="hidden xl:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title="Easy return" subtitle="Within 14 days" icon="4" />
      </div>

      <div className="hidden sm:flex items-center h-full w-full flex-1 min-w-0 justify-end">
        <div className="max-w-[220px] w-full px-2 box-border overflow-hidden">
          <div className="w-full flex justify-end">
            <Button type="bordered" onClick={() => {}}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
