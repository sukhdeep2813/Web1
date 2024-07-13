import { extendBaseTheme } from "@chakra-ui/react";

export const Theme = extendBaseTheme({
    fonts: {
        heading: `Ubuntu`,
        body: `Ubuntu`,
      },

      styles: {
        global: {
          // styles for the `body`
          body: {
            bg: "#F3F3F7",
            color: 'white',
          },
        },
      },
})