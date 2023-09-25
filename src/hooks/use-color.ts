import { colors } from "../lib/colors";

export function useColor() {
  const scheme = "dark";

  return {
    scheme,
    colors: colors(scheme),
  };
}
