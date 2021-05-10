import "./Main.scss";
import { Intro, Resources } from "../../components";
import { useItems } from "src/context/ItemsContext";
import { useLanguage } from "src/context/LanguageContext";

export function Main() {
  const items = useItems();
  const language = useLanguage();
  return (
    <div className="main">
      <Intro items={items} language={language} />
      <Resources items={items} language={language} />
    </div>
  );
}
