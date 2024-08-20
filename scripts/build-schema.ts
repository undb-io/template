import { env } from "bun"
import openapiTS, { astToString } from "openapi-typescript"

const url = new URL(
  `/api/bases/${env.UNDB_TEMPLATE_BASE_NAME}/tables/${env.UNDB_TEMPLATE_TABLE_NAME}/openapi.json`,
  env.PUBLIC_UNDB_HOST,
)

if (env.UNDB_TEMPLATE_VIEW_NAME) {
  url.searchParams.set("view", env.UNDB_TEMPLATE_VIEW_NAME)
}

const response = await fetch(url, {
  headers: {
    "X-Undb-Api-Token": env.UNDB_API_KEY!,
  },
})

if (!response.ok) {
  throw new Error("Failed to fetch OpenAPI schema")
}

const data = await response.json()
const ast = await openapiTS(data)
const content = astToString(ast)

await Bun.write("./src/lib/api/templates.d.ts", content)
