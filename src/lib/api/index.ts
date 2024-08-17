import { UNDB_API_KEY } from "$env/static/private"
import { PUBLIC_UNDB_API_HOST } from "$env/static/public"
import createClient from "openapi-fetch"
import type { components, paths } from "./templates"

const headers = new Headers()
headers.set("X-Undb-Api-Token", UNDB_API_KEY)
headers.set("User-Agent", "undb-sveltekit-template")

export const templateClient = createClient<paths>({
  baseUrl: PUBLIC_UNDB_API_HOST + "/api",
  headers,
})

export type Template = components["schemas"]["Record"]
