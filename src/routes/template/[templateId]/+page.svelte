<script lang="ts">
  import { MoveLeftIcon } from "lucide-svelte"
  import type { PageServerData } from "./$types"
  import { Button } from "$lib/components/ui/button"
  import { PUBLIC_UNDB_API_HOST } from "$env/static/public"
  import { AspectRatio } from "$lib/components/ui/aspect-ratio"

  export let data: PageServerData

  let template = data.template
</script>

<section class="pt-10">
  <div class="space-y-4">
    {#if template}
      <div class="flex items-center justify-between">
        <a href="/" class="inline-flex items-center text-muted-foreground hover:text-primary">
          <MoveLeftIcon class="mr-2 h-3 w-3" />
          Back to templates
        </a>
        <Button
          size="sm"
          href={PUBLIC_UNDB_API_HOST +
            "/create-from-template/" +
            template.values.spaceId +
            "/" +
            template.values.baseId}
        >
          Use this template
        </Button>
      </div>
      {@const cover = template.values.Cover[0]}
      {#if cover}
        <AspectRatio class="w-full" ratio={16 / 3}>
          <img class="h-full w-full object-cover" src={cover.signedUrl} alt={template.values.Title} />
        </AspectRatio>
      {/if}

      <h1 class="text-2xl font-semibold">{template.values.Title}</h1>

      <p class="text-muted-foreground">
        {template.values.Summary}
      </p>

      <Button
        href={PUBLIC_UNDB_API_HOST + "/create-from-template/" + template.values.spaceId + "/" + template.values.baseId}
      >
        Use this template
      </Button>
    {/if}
  </div>
</section>
