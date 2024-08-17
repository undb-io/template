<script lang="ts">
  import { MoveLeftIcon } from "lucide-svelte"
  import type { PageServerData } from "./$types"
  import { Button } from "$lib/components/ui/button"
  import { PUBLIC_UNDB_API_HOST } from "$env/static/public"

  export let data: PageServerData

  let template = data.template
</script>

<section class="pt-10">
  <div class="space-y-4">
    <a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary">
      <MoveLeftIcon class="mr-2 h-3 w-3" />
      Back to templates
    </a>
    {#if template}
      <h1 class="text-2xl font-semibold">{template.values.Title}</h1>

      <Button
        href={PUBLIC_UNDB_API_HOST + "/create-from-template/" + template.values.spaceId + "/" + template.values.baseId}
      >
        Use this template
      </Button>
    {/if}
  </div>
</section>
