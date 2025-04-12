import NitroCloudflareDev from "nitro-cloudflare-dev";

export default defineNitroConfig({
  compatibilityDate: "2025-04-06",
  preset: "cloudflare-module",
  experimental: { tasks: true, wasm: true },

  modules: [NitroCloudflareDev],

  cloudflare: {
    deployConfig: true,
    nodeCompat: true,
  },
});
