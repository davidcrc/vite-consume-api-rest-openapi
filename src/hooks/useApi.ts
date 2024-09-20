import { client } from "../api";
import * as services from "../api/services.gen.ts";
export * from "../api/types.gen.ts";
import { Config } from "@hey-api/client-fetch";

export const useApi = (override: Config = {}) => {
  const config: Config = {
    // set default base url for requests
    baseUrl: "http://localhost:4000",
    // set default headers for requests
    headers: {
      // Authorization: 'Bearer <token_from_service_client>',
    },
  };

  client.setConfig({ ...config, ...override });

  return services;
};
