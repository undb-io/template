import { env } from "bun"
import openapiTS, { astToString } from "openapi-typescript"

const response = await fetch(
  new URL(
    `/api/bases/${env.UNDB_TEMPLATE_BASE_NAME}/tables/${env.UNDB_TEMPLATE_TABLE_NAME}/openapi.json`,
    env.PUBLIC_UNDB_HOST,
  ),
  {
    headers: {
      "X-Undb-Api-Token": env.UNDB_API_KEY!,
    },
  },
)

const data = await response.json()
const ast = await openapiTS(data)
const content = astToString(ast)

await Bun.write("./src/lib/api/templates.d.ts", content)
