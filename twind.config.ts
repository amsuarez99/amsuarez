import { Options } from "$fresh/plugins/twind.ts";

export default {
  theme: {
    fontWeight: {
      bold: "700",
    },
    fontFamily: {
      satoshi: ["satoshi", "sans-serif"],
    },
  },
} as Pick<Options, "theme">;
