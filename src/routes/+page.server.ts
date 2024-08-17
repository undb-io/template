import { templateClient } from "$lib/api"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ fetch }) => {
  const templates = await templateClient.GET("/bases/templates/tables/templates/records", {
    fetch,
  })

  if (!templates.response.ok) {
    error(templates.response.status, { message: "Failed to fetch templates" })
  }

  return {
    templates: {
      data: templates.data,
    },
  }
}
