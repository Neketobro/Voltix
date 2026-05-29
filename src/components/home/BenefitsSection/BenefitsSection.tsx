import { Button } from "../../UI";

export function BenefitsSection() {
    return (
        <div className="w-full h-[70px] rounded-sm border border-(--border) bg-(--primary-l) flex items-center justify-between px-5">
            <div className="grid grid-flow-col grid-rows-4 gap-x-4">
                <div className="bg-(--text-secondary) w-11 h-11 rounded-full flex items-center justify-center row-span-4">1</div>
                <h3 className="row-span-2">Free delivery</h3>
                <p className="col-span-2 row-span-2 text-xs">for orders from 1000 UAH</p>
            </div>

            <Button type="bordered" onClick={()=>{}}>Learn more</Button>
        </div>
    )
}