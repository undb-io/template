<script lang="ts">
  import { MoveLeftIcon } from "lucide-svelte"
  import type { PageServerData } from "./$types"
  import { Button } from "$lib/components/ui/button"
  import { PUBLIC_UNDB_HOST } from "$env/static/public"
  import { AspectRatio } from "$lib/components/ui/aspect-ratio"

  export let data: PageServerData

  let template = data.template
</script>

<svelte:head>
  <title>{template?.values.Title} | Undb Templates</title>
</svelte:head>

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
          class="tracking-tighter', 'transform-gpu group relative gap-2 overflow-hidden
							 ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
          href={PUBLIC_UNDB_HOST + "/create-from-template/" + template.values.spaceId + "/" + template.values.baseId}
        >
          Use this template
        </Button>
      </div>
      {@const cover = template.values.Cover?.[0]}
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
        class="tracking-tighter', 'transform-gpu group relative w-[400px] gap-2 overflow-hidden text-lg
							font-semibold ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
        href={PUBLIC_UNDB_HOST + "/create-from-template/" + template.values.spaceId + "/" + template.values.baseId}
      >
        Use this template
      </Button>
    {/if}
  </div>
</section>
