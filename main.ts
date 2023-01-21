/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import { apply } from "twind";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [twindPlugin(
    {
      selfURL: new URL("./twind.config.ts", import.meta.url).href,
      preflight: {
        "@font-face": [
          {
            fontFamily: "satoshi",
            src: 'url(/fonts/Satoshi-Regular.woff2) format("woff2")',
          },
          {
            fontFamily: "satoshi",
            fontWeight: "bold",
            src: 'url(/fonts/Satoshi-Bold.woff2) format("woff2")',
          },
        ],
        html: apply`bg-gray-900 text-white font-satoshi`,
        body: {
          body: apply`text-sm`,
          main: apply`mx-auto max-w-screen-md px-6 pt-6`,
          section: apply`text-lg`,
          h1: apply`text-3xl font-bold mb-4`,
          h2: apply`text-base font-bold sm:text-xl md:text-2xl lg:text-4xl`,
          h3: apply`text-sm font-bold sm:text-lg md:text-xl lg:text-3xl`,
        },
      },
      ...twindConfig,
    },
  )],
});
