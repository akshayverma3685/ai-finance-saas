// src/routes/index.js
import { Router } from "express";
import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const router = Router();

// __dirname fix (ESM me __dirname nahi hota)
const __dirname = dirname(fileURLToPath(import.meta.url));
const routesPath = join(__dirname);

// Sare .routes.js files ko read karo
readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".routes.js")) {
    const routeName = file.replace(".routes.js", ""); // e.g. auth.routes.js → auth

    // Dynamic import
    import(`./${file}`).then((routeModule) => {
      router.use(`/${routeName}`, routeModule.default);
      console.log(`✅ Loaded route: /${routeName}`);
    });
  }
});

export default router;
