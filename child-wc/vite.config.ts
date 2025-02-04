import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
// import { readFileSync } from "fs";
// import { transform } from "lightningcss";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  css: {
    transformer: "lightningcss",
  },
  plugins: [
    // {
    //   name: "custom-css-import",
    //   enforce: "pre",
    //   resolveId: (id, importer) =>
    //     // add .custom so CSS modules are not precessed by the default pipeline
    //     id.endsWith(".module.css")
    //       ? join(dirname(importer!), `${id}.custom`)
    //       : undefined,
    //   load: (id) => {
    //     if (id.endsWith(".module.css.custom")) {
    //       const filename = id.slice(0, -7);
    //       const a = transform({
    //         filename,
    //         code: readFileSync(filename),
    //         cssModules: true,
    //       });
    //       const styles = Object.fromEntries(
    //         Object.entries(a.exports!)
    //           // https://github.com/parcel-bundler/lightningcss/issues/291
    //           .sort((a, b) => a[0].localeCompare(b[0]))
    //           .map((a) => [a[0], a[1].name]),
    //       );
    //       const text = a.code.toString();
    //       return [
    //         `export const text = ${JSON.stringify(text)};`,
    //         `export const styles = ${JSON.stringify(styles)};`,
    //       ].join("\n");
    //     }
    //   },
    // },
    react(),
    cssInjectedByJsPlugin({
      styleId: "<child-wc>",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    cssMinify: "lightningcss",
    lib: {
      entry: resolve(__dirname, "src/lib/main.tsx"),
      name: "ChildWC",
      // the proper extensions will be added
      fileName: "child-wc",
    },
  },
});
