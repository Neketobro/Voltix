import { ActionPanel } from "../ActionPanel";
import { Button, Input } from "../../UI";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "uk" ? "en" : "uk";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="bg-(--primary) dark:bg-(--primary) flex items-center justify-between px-[10px] sm:px-[100px] h-[80px] w-full mb-[20px] gap-[5px] md:gap-[10px]">
      <div>
        <img src="src/assets/logo.png" alt="logo image" className="w-[150px]" />
      </div>
      <div>
        <Input placeholder={t("search", {ns: "input"})} />
      </div>
      <div className="hidden xl:flex">
        <ActionPanel />
      </div>

      <div className="hidden md:flex">
        <Button onClick={toggleLang}>
          {i18n.language === "uk" ? "EN" : "UKR"}
        </Button>
      </div>
    </header>
  );
}
