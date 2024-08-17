<script lang="ts">
  import type { Template } from "$lib/api"
  import TemplateCard from "./template-card.svelte"

  export let templates: Template[] = []
</script>

<section class="py-8">
  <div class="grid grid-cols-4 gap-4">
    {#each templates as template}
      <TemplateCard {template} />
    {/each}
  </div>
</section>
