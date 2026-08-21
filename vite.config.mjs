import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://lh3.googleusercontent.com",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests"
].join("; ");

const injectProductionCsp = {
  name: "inject-production-csp",
  apply: "build",

  transformIndexHtml() {
    return [
      {
        tag: "meta",
        attrs: {
          "http-equiv": "Content-Security-Policy",
          content: contentSecurityPolicy
        },
        injectTo: "head-prepend"
      }
    ];
  }
};

export default defineConfig({
  plugins: [react(), injectProductionCsp],
  base: "/Deakin-Unit-Page/",

  build: {
    outDir: "docs",
    emptyOutDir: true
  }
});
