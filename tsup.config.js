import { defineConfig } from "tsup";

export default defineConfig({
  noExternal: ["@tillwhen/common"],
});
