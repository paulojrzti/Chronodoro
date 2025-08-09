import light from "./light";
import dark from "./dark";

export type IconSet = typeof light;

export function getIcons(): IconSet {
  const theme = document.documentElement.getAttribute("data-theme");
  return theme === "dark" ? dark : light;
}
