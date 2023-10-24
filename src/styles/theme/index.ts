import dark from "./dark";
import light from "./light";

const themes = {
  light,
  dark,
};

export type ThemeName = keyof typeof themes;

export default themes;
