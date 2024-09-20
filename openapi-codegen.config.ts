import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  myApi: {
    from: {
      source: "url",
      url: "http://localhost:4000/api-json",
    },
    outputDir: "./src/api",
    to: async (context) => {
      const filenamePrefix = "myApi";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
