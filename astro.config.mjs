// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Serif",
      cssVariable: "--font-serif",
      weights: [400],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
    },
    {
      provider: fontProviders.fontsource(),
      name: "DM Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      styles: ["normal", "italic"],
    },
  ],
});
