import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config";

const STATIC_BUILD = process.env.STATIC_BUILD === "1";

export default defineLovableConfig(
  STATIC_BUILD
    ? {
        // Static FTP export: use TanStack Start's official prerenderer and
        // skip Nitro entirely so no SSR/server bundle is produced for Hostnet.
        nitro: false,
        tanstackStart: {
          pages: [{ path: "/" }],
          prerender: {
            enabled: true,
            crawlLinks: false,
            failOnError: true,
            autoStaticPathsDiscovery: false,
          },
        },
      }
    : {},
);
