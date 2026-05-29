import {
  Button,
  PageLayout,
  ListCategorises,
  HeroBanner,
} from "../../components";
import { BenefitsSection } from "../../components/BenefitsSection";

export function Main() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between gap-[10px]">
            <ListCategorises className="hidden lg:flex" />
            <HeroBanner />
            <ListCategorises className="hidden xl:flex" />
          </div>
          <BenefitsSection />
        </div>
      </div>
    </PageLayout>
  );
}
