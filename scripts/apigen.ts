import { createClient } from "@hey-api/openapi-ts";

try {
  createClient({
    client: "@hey-api/client-fetch",
    input: "http://localhost:4000/api-json",
    output: {
      path: "./src/api",
      format: "prettier",
    },
  });
} catch (error) {
  console.error("Error generating API client", error);
}
