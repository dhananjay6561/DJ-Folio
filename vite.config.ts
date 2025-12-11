// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// Optional: install with `npm i -D rollup-plugin-visualizer`
let visualizer;
try {
  // use require-style dynamic import so devDependency absence won't crash config
  // (Vite loads this file in Node ESM; dynamic import returns a promise,
  // but we keep it synchronous via try/catch fallback below)
  // eslint-disable-next-line no-eval
  visualizer = (await import("rollup-plugin-visualizer")).visualizer;
} catch (e) {
  // visualizer not installed — that's fine
  visualizer = null;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ command, mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [
      react(),
      tailwind(),
      // add visualizer only when devDependency is installed and when analyzing
      ...(visualizer && process.env.BUNDLE_ANALYZE === "true"
        ? [visualizer({ filename: path.resolve(__dirname, "dist/stats.html"), open: false })]
        : []),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets"),
      },
    },
    css: {
      postcss: {
        plugins: [],
      },
    },
    root: path.resolve(__dirname, "client"),
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      // Adjusted: Three.js is heavy but necessary for Hero section
      chunkSizeWarningLimit: 800,
      sourcemap: isProd ? false : "inline",
      terserOptions: {
        compress: {
          // reduce size a bit and remove obvious dev noise in prod builds
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          // Strategic chunking: group related libs to reduce chunk overhead
          manualChunks(id) {
            if (!id || !id.includes("node_modules")) return;

            // Heavy 3D libs -> separate chunk (lazy-loaded if possible)
            if (id.includes("three") || id.includes("@react-three")) {
              return "three-vendor";
            }

            // React ecosystem -> core chunk
            if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
              return "react-vendor";
            }

            // UI libs -> ui chunk
            if (id.includes("@radix-ui") || id.includes("lucide-react") || id.includes("react-icons")) {
              return "ui-vendor";
            }

            // Form & validation -> forms chunk
            if (id.includes("react-hook-form") || id.includes("zod") || id.includes("@hookform")) {
              return "forms-vendor";
            }

            // Animation -> motion chunk
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "motion-vendor";
            }

            // Everything else -> misc chunk
            return "vendor";
          },
        },
      },
    },
    optimizeDeps: {
      // explicitly pre-bundle core libs you use across your app to speed dev cold-start
      include: ["react", "react-dom", "@tanstack/react-query"],
      // never prebundle server-only or very heavy libs you lazy-load
      exclude: ["pg", "nodemailer", "three", "@react-three/fiber", "@react-three/drei"],
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
    // helpful: expose the __dirname path for scripts that may read build outputs
    define: {
      __PROJECT_ROOT: JSON.stringify(__dirname),
    },
  };
});
