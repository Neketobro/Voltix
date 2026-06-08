import {
  PageLayout,
  ListCategorises,
  HeroBanner,
  BenefitsSection,
  NewArrivals,
} from "../../components";

import { useTranslation } from "react-i18next";

export function Main() {
  const { t } = useTranslation();
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
          <h1>{t("hello")}</h1>
          <p>{t("welcome")}</p>

         
        </div>
      </div>
    </PageLayout>
  );
}
