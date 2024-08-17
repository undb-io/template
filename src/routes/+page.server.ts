import { templateClient } from "$lib/api";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  const templates = await templateClient.GET("/bases/templates/tables/templates/records", { fetch });

  return {
    templates: {
      data: templates.data,
    },
  };
};
