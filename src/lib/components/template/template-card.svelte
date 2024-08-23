<script lang="ts">
  import type { Template } from "$lib/api"
  import * as Card from "$lib/components/ui/card"
  import { AspectRatio } from "$lib/components/ui/aspect-ratio"
  import { MoveRightIcon } from "lucide-svelte"

  export let template: Template
</script>

<a href={`/template/${template.id}`}>
  <Card.Root>
    <Card.Content class="group flex min-h-[300px] flex-col p-0 shadow-sm transition-shadow hover:shadow-md">
      {@const cover = template.values.Cover?.[0]}
      <AspectRatio ratio={16 / 9} class="bg-muted">
        {#if cover}
          <img src={cover.signedUrl} alt={template.values.Title} class="h-full w-full object-cover" />
        {/if}
      </AspectRatio>

      <div class="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
        <p class="flex items-center font-semibold">
          <span>
            {template.values.Title}
          </span>

          <MoveRightIcon class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
        </p>

        <p class="line-clamp-6 text-sm text-muted-foreground">
          {template.values.Summary}
        </p>

        <p class="mt-4 text-right text-xs text-muted-foreground">
          <span> Created by: </span>
          <span class="font-semibold"> {template.values.Creator} </span>
        </p>
      </div>
    </Card.Content>
  </Card.Root>
</a>
