import { templateClient } from "$lib/api"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({ params, fetch }) => {
  const template = await templateClient.GET("/bases/templates/tables/templates/records/{recordId}", {
    params: { path: { recordId: params.templateId } },
    fetch,
    cache: "no-cache",
  })

  return { template: template.data?.data }
}
