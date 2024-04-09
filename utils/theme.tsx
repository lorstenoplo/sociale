import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

// Supports weights 100-900
import "@fontsource-variable/kumbh-sans";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    heading: `'Kumbh Sans Variable', sans-serif`,
    body: `'Kumbh Sans Variable', sans-serif`,
  },
});

export default theme;
