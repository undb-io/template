<script lang="ts">
  import type { Template } from "$lib/api";
  import * as Card from "$lib/components/ui/card";
  import { AspectRatio } from "$lib/components/ui/aspect-ratio";
  import { MoveRightIcon } from "lucide-svelte";

  export let template: Template;
</script>

<a href={`/template/${template.id}`}>
  <Card.Root>
    <Card.Content class="group flex min-h-[400px] flex-col p-0 shadow-sm transition-shadow hover:shadow-md">
      {@const cover = template.values.Cover?.[0]}
      <AspectRatio ratio={16 / 9} class="bg-muted">
        {#if cover}
          <img src={cover.signedUrl} alt={template.values.Title} class="h-full w-full object-cover" />
        {/if}
      </AspectRatio>

      <div class="flex-1 px-4 py-1">
        <p class="flex items-center font-semibold">
          <span>
            {template.values.Title}
          </span>

          <MoveRightIcon class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
        </p>
      </div>
    </Card.Content>
  </Card.Root>
</a>
