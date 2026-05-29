import {
  Button,
  PageLayout,
  ListCategorises,
  HeroBanner,
  BenefitsSection,
  NewArrivals,
} from "../../components";

export function Main() {
  return (
    <PageLayout>
      <div className="min-h-screen flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between gap-[10px]">
            <ListCategorises className="hidden lg:flex" />
            <HeroBanner />
            <NewArrivals className="hidden xl:flex" />
          </div>
          <BenefitsSection />
        </div>
      </div>
    </PageLayout>
  );
}
