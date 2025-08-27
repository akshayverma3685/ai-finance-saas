import { Router } from "express";
import { readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import authRoutes from "./auth.routes.js";

const router = Router();

const __dirname = dirname(fileURLToPath(import.meta.url));
const routesPath = join(__dirname);

readdirSync(routesPath).forEach((file) => {
  if (file.endsWith(".routes.js")) {
    const routeName = file.replace(".routes.js", ""); // e.g. auth.routes.js → auth

    import(`./${file}`).then((routeModule) => {
      router.use(`/${routeName}`, routeModule.default);
      console.log(`✅ Loaded route: /${routeName}`);
    });
  }
});

export default router;
