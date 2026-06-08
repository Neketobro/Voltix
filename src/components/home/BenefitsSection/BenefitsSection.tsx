import { Benefite, Button } from "../../UI";
import { useTranslation } from "react-i18next";


export function BenefitsSection() {

  const { t } = useTranslation("benefite")

  return (
    <div className="w-full h-[70px] rounded-sm border border-(--border) bg-(--primary-l) flex items-center px-2 gap-2">
      <div className="flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title={t('delivery_title')} subtitle={t('delivery_subrirle')} icon="1" />
      </div>

      <div className="hidden md:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title={t('payment_title')} subtitle={t('payment_subtitle')} icon="2" />
      </div>

      <div className="hidden lg:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title={t('warranty_title')} subtitle={t('warranty_subtitle')} icon="3" />
      </div>

      <div className="hidden xl:flex items-center h-full w-full flex-1 min-w-0">
        <Benefite title={t('returns_title')} subtitle={t('returns_subtitle')} icon="4" />
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
