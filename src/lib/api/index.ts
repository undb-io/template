import { UNDB_API_KEY } from "$env/static/private"
import { PUBLIC_UNDB_HOST } from "$env/static/public"
import { Client } from "@undb/js-sdk"
import type { components, paths } from "./templates"

const headers = new Headers()
headers.set("X-Undb-Api-Token", UNDB_API_KEY)
headers.set("User-Agent", "undb-sveltekit-template")

export const undb = new Client({
  baseUrl: PUBLIC_UNDB_HOST + "/api",
})

undb.setSecret(UNDB_API_KEY)

export const templateClient = undb.openapi<paths>()

export type Template = components["schemas"]["grid:ViewRecord"]
