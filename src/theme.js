import { extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: "false",
  },
  colors: {
    base: "#1e1e2e",
    text: "#cdd6f4",
    subtext: '#a6adc8',
    mantle: "#181825",
    crust: "#11111b",
    lavender: "#b4befe",
    red: "#f38ba8",
    blue: "#89b4fa",
  },
});
export default theme;
