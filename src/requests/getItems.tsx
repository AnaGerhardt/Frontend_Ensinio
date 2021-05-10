import http from "./http";

interface Languages<T> {
  pt: T;
  en: T;
  es: T;
}

interface IntroType {
  title: Languages<string>;
  content: Languages<string>;
  buttons: Languages<string[]>;
}

interface ResourcesComponent {
  top: Languages<string[]>;
  title: Languages<string>;
  footer: Languages<string[]>;
}

export interface IResources {
  id: number;
  title: Languages<string>;
  description: Languages<string>;
}

export interface Items {
  nav: Languages<string[]>;
  authentication: Languages<string[]>;
  intro: IntroType;
  resourcesComponent: ResourcesComponent;
  resources: IResources[];
}

export async function getItems(): Promise<Items> {
  const req = await http.get(getItems.url);
  return req?.data;
}

getItems.url = "/api";
