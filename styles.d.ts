import "styled-components";

export type MainColorsKeys = keyof typeof mainColors;

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    title: string;
    colors: {
      title: string;
      text: string;
      detail: string;
      background: string;
      main: Record<MainColorsKeys, Record<"light" | "normal" | "dark", string>>;
    };
  }
}
