import "./Layout.scss";
import Logo from "src/assets/images/logo.svg";
import {
  Brazil,
  Spain,
  USA,
  SelectArrow,
  Check,
  User,
} from "src/components/Icons";
import { useState } from "react";
import { LanguageContext, Languages } from "src/context/LanguageContext";
import { useItems } from "src/context/ItemsContext";

interface LanguagesHover {
  icon: JSX.Element;
  title: Languages;
}

const languagesHover: LanguagesHover[] = [
  {
    icon: <Brazil />,
    title: "pt",
  },
  {
    icon: <USA />,
    title: "en",
  },
  {
    icon: <Spain />,
    title: "es",
  },
];

interface IProps {
  children: JSX.Element;
}

export function Layout({ children }: IProps) {
  const items = useItems();
  const store = localStorage.getItem("language");
  const persistedLang: Languages =
    store === "pt" || store === "en" || store === "es" ? store : "pt";
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
    persistedLang
  );
  return (
    <LanguageContext.Provider value={selectedLanguage}>
      <header className="header">
        <div className="header-logo">
          <img src={Logo} alt="Logo Ensinio" />
        </div>
        <div className="header-hamburger">☰</div>
        <nav>
          <ul className="header-center">
            {items &&
              items.nav[selectedLanguage].map((li: string, i) => (
                <li key={i}>{li}</li>
              ))}
          </ul>
        </nav>
        <nav>
          <ul className="header-right">
            <li className="header-right-signin">
              <User />
              {items && items.authentication[selectedLanguage][0]}
            </li>
            <li className="header-right-start">
              {items && items.authentication[selectedLanguage][1]}
            </li>
            <li className="header-right-languages">
              <span className="header-right-languages-selected">
                {selectedLanguage}
              </span>
              <SelectArrow />
            </li>
            <div className="header-right-languages-hover">
              <ul>
                {languagesHover.map((language, i) => (
                  <li
                    data-testid="languagesHover"
                    key={i}
                    onClick={() => {
                      setSelectedLanguage(language.title);
                      localStorage.setItem("language", language.title);
                    }}
                  >
                    <div>
                      {language.icon}
                      <span>{language.title}</span>
                      {selectedLanguage === language.title ? <Check /> : ""}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </nav>
      </header>
      {children}
    </LanguageContext.Provider>
  );
}
