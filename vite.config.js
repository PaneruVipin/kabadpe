import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  function keyPerfixer(perfix, originalObject) {
    const transformedObject = Object.keys(originalObject).reduce(
      (result, key) => {
        result[`${perfix}_${key}`] = JSON.stringify(originalObject[key]);
        return result;
      },
      {}
    );
    return transformedObject;
  }
  const allEnv = keyPerfixer("ENV", env);
  return {
    plugins: [
      react(),
    ],
    define: { ...allEnv, ENV: env },
  };
});
