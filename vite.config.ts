import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // If you're deploying to a GitHub project page (e.g. https://ayoubwe.github.io/web2CMC/)
  // set base to the repo name. Change '/web2CMC/' to your repo path if different.
  base: mode === "production" ? "/web2CMC/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
