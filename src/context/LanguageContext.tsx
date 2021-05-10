import { createContext, useContext } from "react";

export type Languages = "pt" | "en" | "es";

export const LanguageContext = createContext<Languages | undefined>(undefined);

export function useLanguage(): Languages | undefined {
  const language = useContext(LanguageContext);
  return language;
}
